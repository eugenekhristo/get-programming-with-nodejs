const http = require('http');
const httpStatus = require('http-status-codes');
require('colors');
const router = require('./router');
const contentTypes = require('./contetTypes');
const { responseWithFile } = require('./utils');

const PORT = 3000;

router.get('/', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  responseWithFile('./views/index.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  responseWithFile('./views/thanks.html', res);
});

router.get('/courses.html', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  responseWithFile('./views/courses.html', res);
});

router.get('/contact.html', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  responseWithFile('./views/contact.html', res);
});

router.get('/bootstrap.css', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  responseWithFile('./public/css/bootstrap.css', res);
});

router.get('/confetti_cuisine.css', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  responseWithFile('./public/css/confetti_cuisine.css', res);
});

router.get('/people.jpg', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  responseWithFile('./public/images/people.jpg', res);
});

router.get('/product.jpg', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  responseWithFile('./public/images/product.jpg', res);
});

router.get('/graph.png', (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.png);
  responseWithFile('./public/images/graph.png', res);
});

http.createServer(router.handle).listen(PORT);
console.log(`NodeJS server is running on ${PORT} port...`.cyan);
