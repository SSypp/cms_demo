import React from 'react'
import {Card,message,Button} from 'antd'
import './ui.less'
class Message extends React.Component{

    handleOpenMessage = (type) => {
        message[type]('来自晚饭加鸡腿的提示')
    }
    render(){
        return (
            <div>
                <Card title='默认提示栏' className='Card'>
                    <Button type='primary' onClick={() => this.handleOpenMessage('info')}>info</Button>
                    <Button type='primary' onClick={() => this.handleOpenMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.handleOpenMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.handleOpenMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.handleOpenMessage('warn')}>warn</Button>
                    <Button type='primary' onClick={() => this.handleOpenMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}
export default Message;