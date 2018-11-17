import React,{Component} from 'react'
import PropTypes from 'prop-types'
import CategoryList from './CategoryList';


export default class BlogBodyRight extends Component {
    // static propTypes = {
    //     src : PropTypes.string
    // }

    // static defaultProps = {
    //     src : ""
    // }
    constructor(){
        super()
        this.state = {
          users : [],
          categories : []
        }
    }

    componentWillMount(){
        const categories = [
          {title:"博客类别1",blogNums:"7"},
          {title:"博客类别2",blogNums:"8"},
          {title:"博客类别3",blogNums:"9"},
          {title:"博客类别4",blogNums:"10"}
        ]
        this.setState({categories:categories})
    }

    render(){
        return (
            <div className="blog-body-right">
                <CategoryList categories={this.state.categories}></CategoryList>
            </div>
        )
    }

    
}