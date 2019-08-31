import React from 'react'
import {Card,Button,Table,Select,Form,Modal, message,DatePicker} from 'antd'
import './../ui/ui.less'
import axios from './../../axios'
import Utils from './../../utils'
const Option = Select.Option;
const FormItem = Form.Item;
class Order extends React.Component{
    state = {
        list:[],
        orderInfo:{},
        orderConfirmVisble:false
    }
    params = {
        page:1
    }
    componentDidMount(){
        this.request();
    }
    // formList = [
    //     {
    //         type:'SELECT',
    //         label:'城市',
    //         field:'city',
    //         placeholder:'全部',
    //         initialValue:'1',
    //         width:80,
    //         list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '深圳' },{id:'4',name:'广州'}]
    //     },
    //     {
    //         type: '时间查询'
    //     },
    //     {
    //         type: 'SELECT',
    //         label: '订单状态',
    //         field:'order_status',
    //         placeholder: '全部',
    //         initialValue: '1',
    //         width: 80,
    //         list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '已结束' }]
    //     }
    // ]
   handleFilter = (params)=>{
        this.params = params;
        this.request();
    }
    //请求数据
    request = ()=>{
        let _this = this;
        axios.ajax({
          url: '/order/list',
          data: {
            params: {
              page: this.params.page
            }
          }
        }).then((res) => {
          //console.log(res)
          let list = res.result.list.map((item, index) => {
            item.key = index;
            return item;
          });
          this.setState({
            list: list,
            pagination: Utils.pagination(res, (current) => {
              _this.params.page = current;
              _this.request();
            })
          })
        })
    }
    //选中一行
    onRowClick = (record,index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    //结束订单确认
    handleConfirm = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        axios.myajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    orderId: item.id
                }
            }
        }).then((res)=>{
            console.log(res);
            if(res.code == 0){
                this.setState({
                    orderInfo:res.result,
                    orderConfirmVisble: true
                })
            }
        })
    }
    //订单结束完成
    handleFinishOrder = () => {
        let item = this.state.selectedItem;
        axios.myajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.request();
            }
        })
    }
    //订单详情
    openOrderDetail = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请先选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    render(){
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render(status){
                    return status == 1 ? '进行中' : '已结束';
                }
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        return (
            <div>
                <Card title='订单管理' className='Card'>
                    <FilterForm filterSubmit={this.handleFilter} />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    />
                </div>
                {/* 结束订单表 */}
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisble:false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}
//过滤组件
class FilterForm extends React.Component {
    //查询
    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }
    //重置
    reset = () => {
        this.props.form.resetFields();
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form layout='inline'>
          <FormItem label='城市'>
            {
              getFieldDecorator('city-id')(
                <Select style={{ width: 100 }}
                  placeholder='全部'
                >
                  <Option value=''>全部</Option>
                  <Option value='1'>北京市</Option>
                  <Option value='2'>上海市</Option>
                  <Option value='3'>深圳市</Option>
                  <Option value='4'>广州市</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="订单时间">
            {
              getFieldDecorator('start_time')(
                <DatePicker></DatePicker>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('end_time')(
                <DatePicker></DatePicker>
              )
            }
          </FormItem>
          <FormItem label="订单状态">
            {
              getFieldDecorator('order_statu')(
                <Select
                  style={{ width: 80 }}
                  placeholder="全部"
                >
                  <Option value="">全部</Option>
                  <Option value="1">进行中</Option>
                  <Option value="2">已结束</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem>
            <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
            <Button onClick={this.reset}>重置</Button>
          </FormItem>
        </Form>
      )
    }
  }
  FilterForm = Form.create({})(FilterForm);

export default Order;