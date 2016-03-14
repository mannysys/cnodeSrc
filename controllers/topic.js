/**
 * Created by shadow on 2016.3.12.
 */
var validator = require('validator');
var TopicModel = require('../models/topic');

//处理显示创建话题页面
exports.showCreate = function(req, res){
    res.render('topic/create');
};

//处理提交话题信息
exports.create = function(req, res){
    // trim去掉字符串的两端空格
    var title = validator.trim(req.body.title);
    var tab = validator.trim(req.body.tab);
    var content = validator.trim(req.body.t_content);

    var hasEmptyInfo = [title, tab, content].some(function(item){
       return  item === '';
    });
    if(hasEmptyInfo){
        res.status(422);
        return res.render('topic/create', {error: '您填写的信息不完整'});
    }
    var topicData = {
        title: title,
        content: content,
        tab: tab,
        username: req.session.user.username,
        insertTime: Date.now()
    };
    TopicModel.addTopic(topicData, function(err, result){
        return res.render('topic/create', {success: '发表话题成功！'});

    });

};
















