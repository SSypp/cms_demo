import React from 'react'
import {Card,Button,Modal} from 'antd'
import './ui.less'
class Modals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show1:false,
            show2:false,
            show3:false,
            show4:false
        }
    }
    handleShowModals = (type) => {
        this.setState({
            [type]:true
        })
    }
    handleShowComfirm = (type) => {
        Modal[type]({
            title:'点赞？',
            content:'看了这么久，确认不给我点个赞吗？',
            onOk(){
                alert("感谢您的点赞！")
            },
            onCancel(){
                console.log('我会改进的')
            }
        })
    }
    render(){
        return (
            <div>
                <Card title='基础模态框' className='Card'>
                    <Button type='primary' onClick = {() => this.handleShowModals('show1')}>Open</Button>
                    <Button type='primary' onClick = {() => this.handleShowModals('show2')}>自定义页脚</Button>
                    <Button type='primary' onClick = {() => this.handleShowModals('show3')}>top20px</Button>
                    <Button type='primary' onClick = {() => this.handleShowModals('show4')}>垂直水平居中</Button>
                </Card>
                {/* //comfirm */}
                <Card title='确认模态框' className='Card'>
                    <Button type='primary' onClick = {() => this.handleShowComfirm('info')}>info</Button>
                    <Button type='primary' onClick = {() => this.handleShowComfirm('error')}>error</Button>
                    <Button type='primary' onClick = {() => this.handleShowComfirm('warning')}>warning</Button>
                    <Button type='primary'onClick = {() => this.handleShowComfirm('confirm')}>confirm</Button>
                    <Button type='primary'onClick = {() => this.handleShowComfirm('success')}>success</Button>
                </Card>
                {/* //open模态框 */}
                <Modal
                    title='晚饭加鸡腿'
                    visible={this.state.show1}
                    onCancel = { () => {
                        this.setState({
                            show1:false
                        })
                    }}
                >
                    <p>欢迎访问晚饭加鸡腿后台管理系统</p>
                </Modal>
                {/* 自定义页脚模态框 */}
                <Modal
                    title='晚饭加鸡腿'
                    visible={this.state.show2}
                    okText = '好的'
                    cancelText = '取消'
                    onCancel={
                        () => {
                            this.setState({
                                show2:false
                            })
                        }
                    }
                >
                     <p>欢迎访问晚饭加鸡腿后台管理系统</p>
                </Modal>
                 {/* top20px模态框 */}
                 <Modal
                    title='晚饭加鸡腿'
                    visible={this.state.show3}
                    okText = '好的'
                    cancelText = '取消'
                    style={{top:20}}
                    onCancel={
                        () => {
                            this.setState({
                                show3:false
                            })
                        }
                    }
                >
                     <p>欢迎访问晚饭加鸡腿后台管理系统</p>
                </Modal>
                 {/* 居中模态框 */}
                 <Modal
                    title='晚饭加鸡腿'
                    visible={this.state.show4}
                    okText = '好的'
                    cancelText = '取消'
                    wrapClassName = 'vertical-center-modal'
                    onCancel={
                        () => {
                            this.setState({
                                show4:false
                            })
                        }
                    }
                >
                     <p>欢迎访问晚饭加鸡腿后台管理系统</p>
                </Modal>
            </div>
        )
    }
}
export default Modals;