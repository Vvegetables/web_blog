import React,{Component} from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default class RichTextEditor extends Component{

    constructor(){
        super();
        this.state = {
            editorState : EditorState.createEmpty(),
        }
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState })
    }

    render (){
        return(
            <Editor
                editorState={this.state.editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange.bind(this)}
            />
        )
    }

}