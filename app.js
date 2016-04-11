// var express = require("express");
// var path=require('path');
// var mongoose = require('mongoose');
// var _ = require('underscore');
// var Movie = require("./models/movie");
// var app = express();
// var port = process.env.PORT || 3000;

// app.set("views","./views/pages");
// app.set('view engine','jade');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname,'bower_components')));


// app.listen(port);


var express = require('express');
var jade = require('jade');
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie');

// 静态资源请求路径
var path = require('path');
var bodyParser= require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
app.locals.moment = require('moment');

// movie为mongodb的一个数据库
// mongoose.connect('mongodb://localhost/node_movie')

app.set('views', './views/pages');
app.set('view engine', 'jade');
// 静态资源请求路径
app.use(express.static(path.join(__dirname, 'bower_components'))); 
// console.info('__dirname',__dirname,path.join(__dirname, 'bower_components'));

// 表单数据格式化
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(port);
var emptyMovie = {
    title: "",
    doctor: "",
    country: "",
    language: "",
    year: "",
    poster: "",
    summary: ""
};

console.log("obj start on port"+ port);

app.get("/",function(req,res){
	console.log("router in index");
		res.render("index",{
				title: '首页',
				movies: [{
				title:'太阳的后裔',
				_id: 1,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title:'wahahahh',
				_id: 2,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title:'太阳的后裔',
				_id: 3,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title:'太阳的后裔',
				_id: 4,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title:'太阳的后裔',
				_id: 5,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}]
		})
});

app.get("/list",function(req,res){
	console.log("router in list");
		res.render("list",{
				title: '列表页',
				movies:[{
					_id:1,
					doctor:'javan',
					country:'china',
					title:'钢铁侠',
					year:2014,
					poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
					language:'chinese',
					flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
					summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
					},{
					_id:2,
					doctor:'javan',
					country:'china',
					title:'钢铁侠',
					year:2014,
					poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
					language:'chinese',
					flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
					summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
				}]
		})
});

app.get("/detail/:id",function(req,res){
	console.log("router in detail");
		res.render("detail",{
				title: '详情页',
				movie:{
					_id:1,
					doctor:'javan',
					country:'china',
					title:'钢铁侠',
					year:2014,
					poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
					language:'chinese',
					flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
					summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
				}
		})
});

app.get("/admin",function(req,res){
	console.log("router in admin");
		res.render("admin",{
				title: '管理页',
				movie:{
					doctor:'',
					country:'',
					title:'',
					year:'',
					poster:'',
					language:'',
					flash:'',
					summary:''
					}
		})
});

// module.exports = function(router){

// 	console.log("aaaa");
// 	router.get("/",function(req,res){
// 		res.render("views/index");
// 	});
// }