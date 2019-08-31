import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

class Admin extends React.Component {
    render(){
        return (
            <Row className='container'>
                {/* 左侧布局 */}
                <Col span={4} className='nav-left'>
                    <NavLeft>I am LeftMenu</NavLeft>
                </Col>
                <Col span={20} className='main'>
                    <Header>I am header</Header>
                    <Row className='conment'>
                        { this.props.children }
                    </Row>
                    <Footer>I am Footer</Footer>
                </Col>
            </Row>
        )
    }
    
}

export default Admin;