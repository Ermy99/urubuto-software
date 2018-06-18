var express = require('express'); //express vs httpcreateserver
var webApp = express(); 
var parser = require('body-parser');
var path = require('path'); // allows us to work with url
var mongoose = require('mongoose'); //for connecting to databse

// var userSchema = new.mongoose.Schema({
// 	email: {
// 		type: String,
// 		unique: true,
// 		required: true,
// 		trim: true
// 	},
// 	username: {
// 		type: String,
// 		unique: true,
// 		required: true,
// 		trim: true
// 	},
// 	password: {
// 		type: String,
// 		required: true
// 	},
// 	passwordConf: {
// 		type: String,
// 		required: true
// 	}
// });
// var session = require('express-session');
//var http = require('http'); why is this not necessary?
//http.createServer(200, funxction.....)
// const vs var?\


webApp.set('view engine' , 'pug'); // what is the set method
webApp.set('views', 'views'); //file i used ??

// webApp.get('/home', function(req, res) {
// 	res.send('sfsg'); displays text
// })

//home page
webApp.get('/', function(req, res) { // what is the get method?
	res.render('home') //render method?
})

//Services
webApp.get('/services', function(req, res) {
	res.render('services')
})

//Projects
webApp.get('/projects', function(req, res) {
	res.render('projects')
})

//put in the project items

//About us
webApp.get('/about-us', function(req, res) {
	res.render('aboutUs')
})

//Contact us
webApp.get('/contact-us', function(req, res) {
	res.render('contactUs')
})

webApp.get('/login', function(req, res) {
	res.render('login')
})

webApp.post('/login')

webApp.get('/forgot-password', function(req, res) {
	res.render('forgotPassword')
})

//if email is valid
webApp.get('/email-sent', function(req, res) {
	res.render('emailSent')
})

//if email is not valid, check pug

//actually cant have a login link in the nav, so maybe have 'user'

webApp.listen(3000, function(req, res) {
	console.log('Server has started.')
})