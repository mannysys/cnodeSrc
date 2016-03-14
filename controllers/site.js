/**
 * Created by shadow on 2016.3.13.
 */
var topicModel = require('../models/topic');
var eventproxy = require('eventproxy');
var _ = require('lodash');

exports.index = function(req, res){
    //如果接转换整型数值错误就默认为1
    var page = parseInt(req.query.page) || 1;
    //如果page小于0了就默认赋值为1
    page = page > 0 ? page : 1;
    //判断tab没有值，默认为all所有
    var tab = req.query.tab || 'all';
    var query = {};
    if(tab !== 'all'){
        query.tab = tab;
    }
    var ep = new eventproxy();
    //-insertTime表示按时间倒序排序
    var count = 10;
    var option = {skip: (page-1)*count, limit: count, sort: '-insertTime'};
    topicModel.getTopics(query, option, function(err, topics){
        //将topics中时间格式进行转换,增加一个timeStr字段时间转换格式
        topics = _.map(topics, function(topic){
            topic.timeStr = topic.insertTime.toLocaleDateString()
                + ''
                + topic.insertTime.toTimeString().replace(/\sGM.*$/, '');
            return topic;
        });
        //抛出事件topic_data_ok，携带数据topics
        ep.emit('topic_data_ok', topics);
    });
    //获取出总共多少页
    topicModel.count(query, function(err, allCount){
        // 获取到总共数据然后向上取整，转换成页数
        var pageCount = Math.ceil(allCount/count);
        ep.emit('page_count_ok', pageCount);
    });
    //接收抛出的事件
    ep.all('topic_data_ok', 'page_count_ok', function(topics, pageCount){
        res.render('index', {topics:topics, tab:tab, page:page, pageCount:pageCount});
    });



}





















