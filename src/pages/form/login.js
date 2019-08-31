import React from 'react'
import {Card,Form,Icon,Button,Input,message,Checkbox } from 'antd'
import './../ui/ui.less'
const FormItem = Form.Item;
class LoginForm extends React.Component{
    
    
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.Password}`)
            }
        })
    }
    handleSubmit2 = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.vUserName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.vPassword}`)
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title='行内登录表单' className='Card'>
                    <Form layout='inline'>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('Password',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            min:6,max:16,
                                            message:'用户密码在6~16位之间'
                                        }
                                    ]
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Password"
                                    type='password'
                                />
                                )
                            }

                        </FormItem>
                        <FormItem>
                            <Button  type="primary" onClick={this.handleSubmit} >Login</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='登录水平表单' className='Card'>
                    <Form style={{width:350}}>
                        <FormItem>
                            {
                                getFieldDecorator('vUserName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('vPassword',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            min:6,max:16,
                                            message:'用户密码在6~16位之间'
                                        }
                                    ]
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Password"
                                    type='password'
                                />
                                )
                            }

                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('vRemember', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>

                        </FormItem>
                        <FormItem>
                            <Button  type="primary" onClick={this.handleSubmit2} >Login</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(LoginForm);