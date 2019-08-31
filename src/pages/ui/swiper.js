import React from 'react'
import {Card, Carousel } from 'antd'
import './ui.less'
class Swiper extends React.Component{
    render(){
        return (
            <div>
                {/* 文字轮播 */}
                <Card title='文字轮播' className='Card' >
                    <Carousel autoplay effect='scrollx'>
                        <div><h1>I am Vuejs</h1></div>
                        <div><h1>I am Reactjs</h1></div>
                        <div><h1>I am Angularjs</h1></div>
                    </Carousel> 
                </Card>

                 {/* 图片轮播 */}
                 <Card title='图片轮播' className='Card slider-wrap' >
                    <Carousel autoplay effect='scrollx'>
                        <div>
                            <img src='/carousel/carousel-1.jpg'/>
                        </div>
                        <div>
                            <img src='/carousel/carousel-2.jpg'/>
                        </div>
                        <div>
                            <img src='/carousel/carousel-3.jpg'/>
                        </div>
                    </Carousel> 
                </Card>
            </div>
        )
    }

}

export default Swiper;