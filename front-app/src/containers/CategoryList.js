import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Category from './Category'

export default class CategoryList extends Component {
    static propTypes = {
        categories : PropTypes.array
    }

    static defaultProps = {
        categories : []
    }

    render(){
        return (
            <div>
                {
                    this.props.categories.map(
                        (category,i) => 
                            <Category
                                title={category.title}
                                blogNums={category.blogNums}>
                            </Category>
                        )
                }
            </div>
        )
    }
}