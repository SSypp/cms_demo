import React from 'react'
import {Card,Spin,Icon,Alert} from 'antd'
import './ui.less'
class Loadings extends React.Component{
    render(){
        const icon = <Icon type='loading' style={{fontSize:24}}/>
        return (
            <div className='loading'>
                {/* //loading基本使用 */}
                <Card title='spin使用'className='Card'>
                    {/* 默认 */}
                    <Spin size='small'></Spin>
                    <Spin size='default' style={{margin:'0 20px'}}></Spin>
                    <Spin size='large'></Spin>
                    {/* 自定义 */}
                    <Spin indicator={icon} tip='loading...' style={{marginLeft:20}}/>
                </Card>
                 {/* //内容遮罩 */}
                 <Card title='内容遮罩'className='Card'>
                    {/* 默认 */}
                    <Alert
                        message="晚饭加鸡腿"
                        description="晚饭加鸡腿后台管理系统"
                        type="info" 
                    >
                    </Alert>
                    <Spin size='large'>
                        {/* 默认  */}
                        <Alert
                            message="晚饭加鸡腿"
                            description="晚饭加鸡腿后台管理系统"
                            type="info"
                            style={{margin:'20px 0'}}
                        ></Alert>
                    </Spin>
                    {/* 自定义 */}
                    <Spin indicator={icon} tip='loading'>
                        <Alert
                            message="晚饭加鸡腿"
                            description="晚饭加鸡腿后台管理系统"
                            type="warning"
                        ></Alert>
                    </Spin>
                    
                    
                </Card>
            </div>
        )
    }
}   
export default Loadings; 