import React from 'react'
import {Card, Row, Col, Modal} from 'antd'

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false
        }
    }

    handleOpenImg = (imgurl) => {
        this.setState({
            visible:true,
            currentImg: '/gallery/'+imgurl
        })
    }

    render(){
        //定义图片数组
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        //获取遍历后的新数组
        const newImgs = imgs.map((img) => img.map((item) => 
            <Card
            style={{marginBottom:10}}
            cover={<img src={'/gallery/' + item }></img>}
            onClick = {() => this.handleOpenImg(item)}
            >
                 <Card.Meta
                    title="晚饭加鸡腿"
                    description="it is beautifull"
                />
            </Card>
        ))
        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {newImgs[0]}
                    </Col>
                    <Col md={5}>
                        {newImgs[1]}
                    </Col>
                    <Col md={5}>
                        {newImgs[2]}
                    </Col>
                    <Col md={5}>
                        {newImgs[3]}
                    </Col>
                    <Col md={4}>
                         {newImgs[4]}
                    </Col>
                </Row>
                <Modal
                    style={{top:20}}
                    width={500}
                    visible={this.state.visible}
                    title="图片画廊"
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                     {<img src={this.state.currentImg} alt="" style={{width:'100%'}}/>}
                </Modal>
            </div>
        )
    }
}
export default Gallery;
