var express = require('express')
var fs = require("fs");
path = require('path');
var router = express.Router()

router.post('/profile',function(req,res,next){
    console.log(req.file.path)
    console.log(path.dirname(__dirname));
    let base = path.dirname(__dirname)
    var des_file = path.join(base,req.file.destination,req.file.originalname)
    content = fs.readFileSync(req.file.path)
    fs.writeFileSync(des_file,content,{mode:0x777})
    res.end(JSON.stringify({data:"success"}))
})

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
        {title:"LMB博客1",desc:'----------',likeNums:4,commentNums:5,blogId:1},
        {title:"LMB博客2",desc:'----------',likeNums:4,commentNums:5,blogId:1},
        {title:"LMB博客3",desc:'----------',likeNums:4,commentNums:5,blogId:1},
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