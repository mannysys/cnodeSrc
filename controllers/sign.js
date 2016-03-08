/**
 * �����¼��ע�Ṧ��
 */
var eventproxy = require('eventproxy');
var UserModel = require('../models/user');
//��ʾע��ҳ��
exports.showSignup = function(req, res){
    res.sender('sign/signup');
};
//����ע��ҳ���ύ����Ϣ
exports.signup = function(req, res){
    //��ȡ�û��ύ������
    var username = req.body.loginname;
    var pass = req.body.pass;
    var re_pass = req.body.re_pass;
    var email = req.body.email;
    var ep = new eventproxy();
    //�����׳��¼��Ĵ�����Ϣ
    ep.on('info_error', function(msg){
        res.status(422);//���ظ������һ��״̬��
        res.render('sign/signup',{error: msg});
    });
    //У������
    //���item������Ԫ�ص��ڿ��˷���true
    var hasEmptyInfo=[username, pass, re_pass, email].some(function(item){
        return item === '';
    });
    //�����һ����������͵ڶ��������ȷ�������ǲ�һ�����򷵻�true
    var isPassDiff = pass !== re_pass;
    if(hasEmptyInfo || isPassDiff){
        //�׳�һ�������¼�
        ep.emit('info_error', 'ע����Ϣ����');
        return;
    }
    //���浽���ݿ�
    //���һ��ע����û����������Ƿ������ݿ����Ѿ�����
    UserModel.getUserBySignupInfo(username, email, function(err, users){
        if(err){
            ep.emit('info_error', '��ȡ�û�����ʧ�ܣ�');
            return;
        }
        //�����ѯ���û����������ݳ��Ⱦ��Ǵ���0����ʾ���û������������
        if(users.length > 0){
            ep.emit('info_error', '�û����������䱻ռ�ã�');
            return;
        }
        //�����ݱ��浽���ݿ�
        UserModel.addUser({username:username, pass:pass, email:email},function(err,result){
            if(result){
                res.render('sign/signup', {success: '��ϲ�㣬ע��ɹ�'});
            }else{
                ep.emit('info_error', 'ע��ʧ�ܣ�');
            }
        });
    });

};

//��ʾ��¼ҳ��
exports.showSignin = function(req, res){
    res.render('sign/signin');
};
//�����û���¼���ύ��Ϣ
exports.signin = function(req, res){
    var username = req.body.name;
    var pass = req.body.pass;
    //У������
    if(username || pass){
        res.status(422);
        return res.render('sign/signin', {error: '����д����Ϣ������'});
    }
    //�����ݿ��ѯ�û�
    UserModel.getUser(username, pass, function(err, user){
        //����û���ѯ�������û����浽session��
        if(user){
            req.session.user = user;
            res.render('sign/signin', {success: '��½�ɹ�'});
        }else{
            res.status(422);
            res.render('sign/signin', {error: '�û��������������'});
        }

    });


};

//�����û��ǳ�����
exports.signout = function(req, res){
    req.session.destory(); //���һ��session
    res.redirect('/'); //�ض�����ҳ
};






















