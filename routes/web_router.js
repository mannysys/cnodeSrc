var express = require('express');
var router = express.Router();

//��ʾע��ҳ��
router.get('/signup', function(req, res){
  res.render('sign/signup');
});
//�ύע����Ϣ
router.post('/signup', function(req, res){

});

//��ʾ��½ҳ��
router.get('/signin', function(req, res){
  res.render('sign/signin');
});
//�ύ��½��Ϣ
router.post('/signin', function(req, res){

});

//�ǳ�
router.post('/signout', function(req, res){

});









module.exports = router;














































































































