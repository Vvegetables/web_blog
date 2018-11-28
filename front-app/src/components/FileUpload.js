import React,{Component} from 'react';

export default class FileUpload extends Component {

    render(){
        return(
            <form action="/api/profile" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" />
                <input type="submit" value="上传"/>
            </form>
        )
    }
}