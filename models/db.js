/**
 * Created by zhoujialin on 2016/3/11.
 */
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/node_club');

db.connection.on("error", function(error){
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

module.exports=db;