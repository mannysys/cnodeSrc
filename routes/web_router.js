var express = require('express');
var router = express.Router();
var signController = require('../controllers/sign');//用户控制器模块
var topicController = require('../controllers/topic');//话题控制器模块
var siteController = require('../controllers/site'); //主页列表控制器模块
var replyController = require('../controllers/reply'); //评论
var auth = require('../middlewares/auth');//检测用户是否登录过中间件模块

// 路由显示注册页面
router.get('/signup', signController.showSignup);
// 路由提交注册信息
router.post('/signup', signController.signup);
// 路由显示登陆页面
router.get('/signin', signController.showSignin);
// 路由提交登陆信息
router.post('/signin', signController.signin);
// 路由登出
router.get('/signout', signController.signout);

//显示发表话题页面（请求路由后会先执行中间件然后再继续执行匿名函数）
router.get('/topic/create', auth.requireLogin, topicController.showCreate);
//处理用户提交的话题信息
router.post('/topic/create', topicController.create);


//显示主页
router.get('/', siteController.index);

//查询文章详情页内容
router.get('/topic/:tid', topicController.detail);

//处理用户的评论
router.post('/reply/reply', auth.requireLogin, replyController.addReply);
//处理用户评论上传的图片
router.post('/upload', auth.requireLogin, replyController.upload);



module.exports = router;








