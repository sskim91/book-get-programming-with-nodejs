const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const indexRouter = require('./routes/index');
const courseRouter = require('./routes/courses');
const contactRouter = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.use(expressLayouts);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	cookie: {
		httpOnly: true,
		secure: false,
	},
	resave: false,
	saveUninitialized: false,
	secret: process.env.COOKIE_SECRET
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/courses', courseRouter);
app.use('/contact', contactRouter);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});

app.listen(process.env.PORT, () => {
	console.log(app.get('port'));
});