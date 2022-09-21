require('dotenv').config() // carrega dados do .env

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);

/* ROTAS DA APLICACAO */
const scoreRouter = require('./routes/ScoreRoute')
app.use('/score', scoreRouter)

module.exports = app;
