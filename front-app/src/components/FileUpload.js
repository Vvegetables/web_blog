import React,{Component} from 'react';

export default class FileUpload extends Component {

    render(){
        return(
            <form action="/profile" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" />
            </form>
        )
    }
}