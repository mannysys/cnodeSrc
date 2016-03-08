var express = require('express');
var router = express.Router();
// ���˿�����ģ��
var signController = require('../controllers/sign');

// ·����ʾע��ҳ��
router.get('/signup', signController.showSignup);
// ·���ύע����Ϣ
router.post('/signup', signController.signup);

// ·����ʾ��½ҳ��
router.get('/signin', signController.showSignin);
// ·���ύ��½��Ϣ
router.post('/signin', signController.signin);

// ·�ɵǳ�
router.get('/signout', signController.signout);





module.exports = router;






























































































