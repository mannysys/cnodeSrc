/**
 * 数据模型
 * 创建话题
 */
var mongoose = require('../mongoose_helper').mongoose;

var TopicSchema = new mongoose.Schema({
    title: String,
    content: String,
    tab: String,
    username: String,
    insertTime: Date
});


TopicSchema.statics.addTopic = function(topic, callback){
    //添加数据
    this.create(topic, callback);
};

TopicSchema.statics.getTopics = function(query, option, callback){
    this.find(query, {}, option, callback);
};







module.exports = mongoose.model('Topic', TopicSchema); //生成数据模型





