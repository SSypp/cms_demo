import React from 'react';
import { Card, Table, Modal, message } from 'antd';
import axios from './../../axios/index'
import './../ui/ui.less';
import { Button } from 'antd/lib/radio';
import Utils from './../../utils'
class basicTable extends React.Component {
  state = {

  }
  params = {
    page: 1
  }
  componentDidMount() {
    this.request();
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
          selectedRowKeys: [],
          selectedRows: null,
          dataSource2: res.result.list,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current;
            this.request();
          })
        })
      }
    })
  }
  //选中一行获取当前信息
  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.info({
      title: '信息',
      content: `姓名:${record.name}--年龄:${record.age}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  //多选选中删除
  handleDelete = () => {
    //选中的行数据
    let rows = this.state.selectedRowKeys;
    //存放选中数据的id
    let ids = [];
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功！！');
        this.request();
      }
    })
  }
  render() {
    // 列
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
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
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    //   数据
    const dataSource = [
      {
        name: '胡彦斌',
        sex: '1',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        name: '胡彦祖',
        sex: '2',
        age: 42,
        address: '西湖区湖底公园1号',
      }
    ];
    dataSource.map((item, index) => {
      item.key = index;
    })
    //单选配置
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    //多选配置
    const rowCheckedRowKeys = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title='基础表格' className='Card'>
          <Table bordered dataSource={dataSource} columns={columns} pagination={false}>

          </Table>
        </Card>
        <Card title='动态表格' className='Card'>
          <Table bordered dataSource={this.state.dataSource2} columns={columns} pagination={false}>

          </Table>
        </Card>
        <Card title='单选表格' className='Card'>
          <Table
            bordered
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={false}
            rowSelection={rowSelection}
            onRow={
              (record, index) => {
                return {
                  onClick: () => {
                    this.onRowClick(record, index);
                  }
                }
              }
            }
          >
          </Table>
        </Card>
        <Card title='多选删除表格' className='Card'>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={false}
            rowSelection={rowCheckedRowKeys}
          >
          </Table>
        </Card>
        <Card title='分页表格' className='Card'>
          <Table
            bordered
            dataSource={this.state.dataSource2}
            columns={columns}
            pagination={this.state.pagination}
          >
          </Table>
        </Card>
      </div>
    )
  }
}
export default basicTable;