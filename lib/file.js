const fs = require('fs');

function isFileExist(path) {
  return fs.existsSync(path);
}

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

exports.isFileExist = isFileExist;
exports.readFile = readFile;
