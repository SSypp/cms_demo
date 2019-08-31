import React from 'react';
import { Card, Table,Badge, Button,Modal, message } from 'antd';
import axios from './../../axios/index'
import './../ui/ui.less';
import Utils from './../../utils'
class highTable extends React.Component {
    state = {

    }
   params = {
       page:1
   }
  componentDidMount(){
      this.request();
      this.request1();
  }

    //动态表格数据请求
  request = () => {
    let _this = this;
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      console.log(res);
      if (res.code == '200') {
        res.result.list.map((item, index) => {
          item.key = index;
        })
        this.setState({
          dataSource: res.result.list,
        })
      }
    })
  }
  //表格数据2请求
  request1 = ()=>{
    axios.ajax({
        url:'table/list1',
        data:{
            params:{
                page:this.params.page
            }
        }
    }).then((res)=>{
        if(res.code == '200'){
            res.result.list.map((item,index)=>{
                item.key = index;
            })
            this.setState({
                dataSource1:res.result.list
            })
        }
    })
  }
  //排序
  handleSort = (pagination,filters,sorter) => {
      this.setState({
          sortOrder:sorter.order
      })
  }
  //删除当前的数据列
  handleDelete = (item) => {
    let id = item.id;
    Modal.confirm({
        title:'确认',
        content:'您确认要删除词条此条数据吗？',
        onOk:() => {
            message.success('删除成功');
            this.request();
        }
    })
  }
    render(){
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width:80
              },
              {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                  let config = {
                    1: '男',
                    2: '女'
                  }
                  return config[sex]
                },
                width:80
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:80
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:120
              }
        ]
        const columns1 = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width:80,
                fixed:'left'
              },
              {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                  let config = {
                    1: '男',
                    2: '女'
                  }
                  return config[sex]
                },
                width:80,
                fixed:'left'
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:80
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:120
              },
              {
                  title:'手机号',
                  dataIndex:'phone',
                  key:'phone',
                  width:100
              },
              {
                title:'时间',
                dataIndex:'datetime',
                key:'datetime',
                width:120
            },
            {
                title:'当前时间',
                dataIndex:'now',
                key:'now',
                width:120
            },
            {
                title:'邮箱',
                dataIndex:'email',
                key:'email',
                width:120
            },
            {
                title:'城市',
                dataIndex:'city',
                key:'city',
                width:80
            },
            {
                title:'地区',
                dataIndex:'region',
                key:'region',
                width:80
            },
            {
                title:'手机号',
                dataIndex:'phone',
                key:'phone',
                width:100
            },
            {
                title:'图片',
                dataIndex:'image',
                key:'image',
                width:120
            },
            {
                title:'标题',
                dataIndex:'title',
                key:'title',
                width:100
            },
            {
                title:'新闻',
                dataIndex:'csentence',
                key:'csentence',
                width:150
            },
            {
                title:'段子',
                dataIndex:'cparagraph',
                key:'cparagraph',
                width:150,
                fixed:'right'
            },
            {
                title:'范围',
                dataIndex:'range',
                key:'range',
                width:100,
                fixed:'right'
            }
        ]
        const columns2 = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width:80
              },
              {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                  let config = {
                    1: '男',
                    2: '女'
                  }
                  return config[sex]
                },
                width:80
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:80,
                sorter:(a,b) =>{
                    return a.age -b.age
                },
                sortOrder:this.state.sortOrder
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:120
              }
        ]
        const columns3 = [
            {
                title: '姓名',
                dataIndex: 'name',
                width:100
              },
              {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                  let config = {
                    1: <Badge status="processing" text="男"></Badge>,
                    2: <Badge status="error" text="女"></Badge>
                  }
                  return config[sex]
                },
                width:100
              },
              {
                title: '年龄',
                dataIndex: 'age',
                width:100
              },
              {
                title: '住址',
                dataIndex: 'address',
                width:100
              },
              {
                  title:'操作',
                  render:(item)=>{
                    return <Button size='small' onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                  },
                  width:100
              }
        ]
        return (
            <div>
                <Card title='头部固定表格' className='Card'>
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{y:400}}
                    ></Table>
                </Card>
                <Card title='左右固定表格' className='Card'>
                    <Table
                        bordered
                        dataSource={this.state.dataSource1}
                        columns={columns1}
                        pagination={false}
                        scroll={{x:1990}}
                    ></Table>
                </Card>
                <Card title='排序表格' className='Card'>
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns2}
                        pagination={false}
                        scroll={{y:400}}
                        onChange={this.handleSort}
                    ></Table>
                </Card>
                <Card title="操作按钮" className='Card'>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:400}}
                    />
                </Card>
            </div>
        )
    }
}

export default highTable;