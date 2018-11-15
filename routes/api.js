var express = require('express')
var router = express.Router()

router.get('/users',function(req,res,next){
    var nums = [{id:1,name:'a'},{id:2,name:"b"},{id:3,name:"c"}]
    res.json(nums)
})

// router.get('/word/:filename',function(req,res){
//     ;
// })

module.exports = router;