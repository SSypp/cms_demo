import React from 'react'
import {Card,notification,Button} from 'antd'
import './ui.less'
class Notification extends React.Component{

    handleOpenNotification = (type,position) => {
        if(position){
            notification.config({
                placement: position
            })
        }
        notification[type]({
            message: '来自晚饭加鸡腿的提示',
            description: '恭喜您获取本站的福利！！'
        })
    }
    render(){
        return (
            <div>
                <Card title='默认提示栏' className='Card'>
                    <Button type='primary' onClick={() => this.handleOpenNotification('info')}>info</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('success')}>success</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('error')}>error</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('warn')}>warn</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('open')}>open</Button>
                </Card>
                <Card title="自定义提示栏" className='Card'>
                    <Button type='primary' onClick={() => this.handleOpenNotification('info','topLeft')}>info</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('success','topRight')}>success</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('warning','bottomLeft')}>warning</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('error','bottomRight')}>error</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('warn')}>warn</Button>
                    <Button type='primary' onClick={() => this.handleOpenNotification('open')}>open</Button>
                </Card>
            </div>
        )
    }
}
export default Notification;