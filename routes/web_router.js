var express = require('express');
var router = express.Router();

//显示注册页面
router.get('/signup', function(req, res){
  res.render('sign/signup');
});
//提交注册信息
router.post('/signup', function(req, res){

});

//显示登陆页面
router.get('/signin', function(req, res){
  res.render('sign/signin');
});
//提交登陆信息
router.post('/signin', function(req, res){

});

//登出
router.post('/signout', function(req, res){

});









module.exports = router;














































































































