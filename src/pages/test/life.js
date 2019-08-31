import React from 'react' 
import { Button, Input } from 'antd'
import './test.less'

function Life() {
    return (
        <div className='test'>
            <h1>hello world</h1>
            <Input text='file' className="myInput"></Input>
            <Button>查询</Button>
        </div>    
    )
}
export default Life;