/**
 * Created by shadow on 2016.3.12.
 */

/*
   ����û��Ƿ��¼��
 */
exports.requireLogin = function(req, res, next){
    if(req.session.user){
        return next();//����ִ��
    }
    res.status(402);
    res.redirect('/signin');//û�е�¼����ת����¼ҳ
}