import React from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'
class Buttons extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            size: 'default'
        }
    }
    //关闭或者停止loading
    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }
    //
    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render(){
        return (
            <div className='login'>
                {/* //基础按钮 */}
                <Card title='基础按钮' className='Card'>
                    <Button type='primary'>click</Button>
                    <Button >click</Button>
                    <Button type='dashed'>click</Button>
                    <Button type='danger'>click</Button>
                    <Button type='link'>click</Button>
                </Card>
                {/* //图形按钮 */}
                <Card title='按钮图形' className='Card'>
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button type='primary' icon="plus">创建</Button>
                    <Button type='primary' icon="edit">编辑</Button>
                    <Button type='danger' icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                    {/* <Button type='primary' icon='edit'>编辑</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button type='dashed'>click</Button>
                    <Button type='danger'>click</Button>
                    <Button type='link'>click</Button> */}
                </Card> 
                {/* Loading按钮 */}
                <Card title="Loading按钮" className="Card">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>off/on</Button>
                </Card>
                {/* 按钮组 */}
                <Card title="按钮组" style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="Card">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group> 
                    <Button type="primary" size={this.state.size}>click</Button>
                    <Button size={this.state.size}>click</Button>
                    <Button type="dashed" size={this.state.size}>click</Button>
                    <Button type="danger" size={this.state.size}>click</Button>
                </Card>
            </div>
        )
    }
}
export default Buttons;