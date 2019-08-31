import React from 'react'
import { Row,Col } from 'antd'
import Utils from '../../utils'
// import axios from '../../axios'
import Axios from 'axios'
import './index.less'

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userName:'晚饭加鸡腿'
        }
        this.HandleGetTime();
        this.HandleGetWeather();
    }
    //获取时间
    HandleGetTime () {
        //时间
        setInterval(() => {
        let currentDate = Utils.formarteDate();
        //    console.log(currentDate)
        this.setState({
            time:currentDate
        })
        },1000)
    }
    //获取天气
    HandleGetWeather () {
        let city = '东阳';
        Axios.get('https://www.tianqiapi.com/api/?version=v6&city='+city).then((res) => {
            console.log(res);
            if(res.status == '200'){
                console.log(res);
                let data = res.data;
                const tianqi = data.wea;
                const wendu = data.tem;
                const xingqi = data.week;
                this.setState({
                    weather:tianqi,
                    wendu: wendu,
                    week:xingqi
                })
            }else{
                console.log('failed')
            }
        })
    }
    render(){
        const { menuType } = this.props;
        return (
            <div className='header'>
                <Row className='header-top'>
                    {
                        menuType ?
                        <Col span={6} className="logo">
                            <img src="/asset/logo.svg" alt=""/>
                            <span>晚饭加鸡腿后台管理系统</span>
                        </Col> : ''
                    }
                    <Col span={menuType ? 18 : 24}> 
                        <span>欢迎,{this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' :
                    <Row className='header-bottom'>
                        <Col span={4} className="left-col">
                            <span>首页</span>
                        </Col>
                        <Col span={20} className="right-col">
                            <span>{this.state.time}</span>
                            <span>{this.state.week}</span>
                            <span>天气：{this.state.weather}</span>
                            <span>温度：{this.state.wendu}</span>
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}
export default Header;