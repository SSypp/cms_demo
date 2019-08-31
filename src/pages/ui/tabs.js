import React from 'react'
import {Card,message,Tabs,Icon} from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;
class ITabs extends React.Component{
    newTabIndex = 0;
    constructor(props){
        super(props)
        const panes = [
            {
                title: 'Tab1',
                content:'this is tab1',
                key:'1'
            },
            {
                title: 'Tab2',
                content:'this is tab2',
                key:'2'
            },
            {
                title: 'Tab3',
                content:'this is tab3',
                key:'3'
            }
        ]
        this.state={
            panes,
            activeKey:panes[0].key
        }
    }
    handleCallback = (key) => {
        message.info('来自晚饭加鸡腿的提示:当前标签页:'+ key)
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab' + activeKey, key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    
    render(){
        return (
            <div>
                <Card title='Tabs标签页' className='Card'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='带图Tabs标签页' className='Card'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type='plus'/>Tab1</span>} key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={<span><Icon type='edit'/>Tab2</span>} key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={<span><Icon type='delete'/>Tab3</span>} key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='带删除和新增的Tabs标签页' className='Card'>
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                        type='editable-card'>
                        {/* <TabPane tab={<span><Icon type='plus'/>Tab1</span>} key="1">
                            Content of Tab Pane 1
                        </TabPane> */}
                        {this.state.panes.map((item)=>{
                            return <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        )
    }
}
export default ITabs;