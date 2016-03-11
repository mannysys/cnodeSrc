var express = require('express');
var router = express.Router();
// 引人控制器模块
var signController = require('../controllers/sign');

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





module.exports = router;








