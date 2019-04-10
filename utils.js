const fs = require('fs');
const httpStatus = require('http-status-codes');
const contentTypes = require('./contetTypes');

module.exports.responseWithFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.text);
      return res.end(
        'Server has encountered an internal problem. It is not your fault! Sorry! 😿'
      );
    }

    res.end(data);
  });
};
