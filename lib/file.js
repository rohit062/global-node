const fs = require('fs');

function isFileExist(path) {
  return fs.existsSync(path);
}

exports.isFileExist = isFileExist;
