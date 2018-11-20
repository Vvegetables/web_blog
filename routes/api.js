var express = require('express')
var router = express.Router()

router.get('/users',function(req,res,next){
    var nums = [
        {id:1,name:'a'},
        {id:2,name:"b"},
        {id:3,name:"c"}
    ]
    res.json(nums)
})

router.get('/load_more_blog',function(req,res,next){
    var blogs = [
        {title:"LMB博客1",desc:'----------',likeNums:'4',commentNums:"5"},
        {title:"LMB博客2",desc:'----------',likeNums:'4',commentNums:"5"},
        {title:"LMB博客3",desc:'----------',likeNums:'4',commentNums:"5"},
    ]
    res.json(blogs)
})

router.get('/blog_detail',function(req,res,next){
    console.log(req.params)
    // get 方式
    // let = blogIdreq.query.blogId
    // post 方式 需要bodyParser
    // let username = req.body.username
    var blogDetail = {
        title : "博客明细",
        desc : "明细内容xxxxxxxxx此处省略一万字",
        commentNums : 100,
        likeNums : 5,
        readNums : 10000
    }
    res.json(blogDetail)
})

// router.get('/word/:filename',function(req,res){
//     ;
// })

module.exports = router;