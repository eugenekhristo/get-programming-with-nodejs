const httpStatus = require('http-status-codes');
const contentTypes = require('./contetTypes');
const { responseWithFile } = require('./utils');

const routes = {
  GET: {},
  POST: {}
};

const get = (urlPath, action) => {
  routes.GET[urlPath] = action;
};

const post = (urlPath, action) => {
  routes.POST[urlPath] = action;
};

const handle = (req, res) => {
  try {
    const { method, url } = req;
    routes[method][url](req, res);
  } catch (err) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    responseWithFile('./views/error.html', res);
  }
};

module.exports = { get, post, handle };
