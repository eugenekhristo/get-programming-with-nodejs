const http = require('http');
const fs = require('fs');
const httpStatus = require('http-status-codes');
require('colors');
const router = require('./router');

const PORT = 3000;

const plaintText = {
  'Content-Type': 'text/plain'
};
const htmlText = {
  'Content-Type': 'text/html'
};

function handleFileResponse(path, res) {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(httpStatus.NOT_FOUND, {
        'Content-Type': 'text/plain'
      });

      return res.end('Nothing found! 404');
    }

    res.end(data);
  });
}

router.get('/', (req, res) => {
  res.writeHead(httpStatus.OK, plaintText);
  res.end('Index');
});

router.post('/', (req, res) => {
  res.writeHead(httpStatus.OK, plaintText);
  res.end('Posted 😛');
});

router.get('/index.html', (req, res) => {
  res.writeHead(httpStatus.OK, htmlText);
  handleFileResponse(`./views/index.html`, res);
});

router.get('/public/images/download.jpg', (req, res) => {
  res.writeHead(httpStatus.OK, {
    'Content-Type': 'image/jpg'
  });
  handleFileResponse(`./public/images/download.jpg`, res);
});

http.createServer(router.handle).listen(PORT);
console.log(`NodeJS server is listening on port ${PORT}...`.cyan);
