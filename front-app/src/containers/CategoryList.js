import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadBlogs : (i) => {
            fetch('/api/load_more_blog',{accpet: "application/json"}).then(
                res => {
                    console.log("category")
                    return res.json().then(
                        json => { // json is a list
                            console.log("blogs:",json)
                            dispatch({type : 'CATEGORY_LIST',blogs:json})
                        }
                    )
                }
            )
            
        }
    }
}

class CategoryList extends Component {
    static propTypes = {
        categories : PropTypes.array
    }

    static defaultProps = {
        categories : []
    }

    constructor(){
        super()
        this.state = {
            blogs : []
        }
    }

    _loadCurCategoryBlogs(i){
        if (this.props.onLoadBlogs){
            this.props.onLoadBlogs(i)
        }
    }

    render(){
        return (
            <div>
                {
                    this.props.categories.map(
                        (category,i) => 
                            <Category
                                onClick = {this._loadCurCategoryBlogs.bind(this,i)}
                                key = {i}
                                title={category.title}
                                blogNums={category.blogNums}>
                            </Category>
                        )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)