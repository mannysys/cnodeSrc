/**
 * 数据模型
 * 添加用户数据和查询用户数据的
 */
/**
 * 数据模型
 * 添加用户数据和查询用户数据的
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/node_club');

var UserSchema = new mongoose.Schema({
    username: String,
    pass: String,
    email: String
});

UserSchema.statics.getUserBySignupInfo = function(username, email, callback){
    // 第一个$or表示或者，第二个是查询条件
    var cond = {$or:[{username: username},{email: email}]};
    this.find(cond, callback);
};

UserSchema.statics.addUser = function(user, callback){
    //添加数据
    this.create(user, callback);
};


UserSchema.statics.getUser = function(username, pass, callback){
    //查询只返回一条数据
    this.findOne({username:username, pass:pass}, callback);
};


module.exports = mongoose.model('User', UserSchema); //生成数据模型



//'use strict';
//var mongoose = require('./db');
//
//class User{
//
//    constructor(){
//        console.log('11111111111111');
//    }
//    userModel(){
//        let userSchema = new mongoose.Schema({
//            username: String,
//            pass: String,
//            email: String
//        });
//        return mongoose.model('User', userSchema); //生成数据模型
//    }
//    static getUserBySignupInfo(username,email,callback){
//        // 第一个$or表示或者，第二个是查询条件
//        let cond = ['$or',{username: username},{email: email}];
//        this.userModel().find(cond, callback);
//    }
//    //添加数据
//    static addUser(user, callback){
//        this.userModel().create(user, callback);
//    }
//    //查询只返回一条数据
//    static getUser(username, pass, callback){
//        this.userModel().findOne({username:username, pass:pass}, callback);
//    }
//
//}
//module.exports = User;



