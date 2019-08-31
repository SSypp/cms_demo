import React from 'react'
import './index.less'
import { Menu } from 'antd'
import { NavLink} from 'react-router-dom'
import menuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu
class NavLeft extends React.Component {
    
    constructor (props) {
        super(props)
        const menuTreeNode = this.renderMenu(menuConfig)
        console.log(menuTreeNode)
        this.state = {
            menuTreeNode:menuTreeNode,
            value:'hello'
        }
        console.log(menuTreeNode)
    }
        
    //菜单栏渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>  
            </Menu.Item>)
        })
    }
    render(){
        return  (
            <div className='navLeft'>
                <div className='logo'>
                    <img src='/asset/logo.svg' alt='logo'/>
                    <h1>www.wfjjt.top</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default NavLeft;