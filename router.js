const httpStatus = require('http-status-codes');

const routes = {
  GET: {},
  POST: {}
};

function handle(req, res) {
  const { method, url } = req;
  if (!routes[method][url]) {
    res.writeHead(httpStatus.NOT_FOUND, {
      'Content-Type': 'text/plain'
    });

    return res.end('Nothing found! 404');
  }

  routes[method][url](req, res);
}

function get(path, action) {
  routes.GET[path] = action;
}

function post(path, action) {
  routes.POST[path] = action;
}

module.exports = {
  handle,
  get,
  post
};
