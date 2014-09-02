var express = require('express'),
	path = require('path'),
	port = process.env.PORT || 3000,
	sass = require('node-sass'),
	app = express();//启动一个web服务器

app.set('views', __dirname + '/views/pages');//设置视图目录
app.set('view engine', 'jade');
// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	sass.middleware({
		src: path.join(__dirname, 'public/sass'), //where the sass files are 
		dest: path.join(__dirname, 'public/styles'), //where css should go
		debug: true, // obvious
		outputStyle: 'compressed',
	})
);
app.listen(port);

console.log('started on port ' + port);

// 
app.get('/', function(req, res) {
	res.render('aa', {
		title: 'aa记账系统'
	});
});