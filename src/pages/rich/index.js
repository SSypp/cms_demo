import React from 'react'
import { Button, Card, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'
import './../ui/ui.less'
class RichText extends React.Component {
  state = {
    editorState: '',
    showRichText: false,
    editorContent: ''
  }
  //内容状态改变时
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }
  //编辑时
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  //清空内容
  handleClearContent = () => {
    this.setState({
      editorState: ''
    })
  }
  //获取HTML文本
  handleGetText = () => {
    this.setState({
      showRichText: true
    })
  }
  render() {
    const { editorState, editorContent } = this.state;
    return (
      <div>
        <Card title='富文本操作' className='Card'>
          <Button type='primary' onClick={this.handleClearContent}>清空内容</Button>
          <Button type='primary' onClick={this.handleGetText}>获取HTML文本</Button>
        </Card>
        <Card title='富文本编辑器' className='Card'>
          <Editor
            editorState={editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}
          ></Editor>
        </Card>
        <Modal title='富文本'
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            })
          }
          }
          onOk={
            () => {
              this.setState({
                showRichText: false
              })
            }
          }
        >
          {draftjs(editorContent)}
        </Modal>
      </div>
    )
  }
}

export default RichText;