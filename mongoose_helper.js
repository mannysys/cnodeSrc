/**
 * Created by shadow on 2016.3.13.
 */
var mongoose = require('mongoose');
//var uri = 'mongodb://username:password@hostname:port/databasename';
var uri = 'mongodb://127.0.0.1/node_club';
mongoose.connect(uri);

exports.mongoose = mongoose;