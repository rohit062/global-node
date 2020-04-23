/**
 * @author Rohit Salaria
 * @description this module contains class that helps manage global variable in application
 * @createOn 27-dec-2018
 */
const file = require('./file');

class Global {
  constructor() {
    this.globalProperty = {};
  }

  setProperty(property, value) {
    this.globalProperty[property] = value;
  }

  getValue(property) {
    if (!{}.hasOwnProperty.call(this.globalProperty, property)) {
      throw new Error(`Global does not have any property ${property}`);
    }
    return this.globalProperty[property];
  }

  deleteProperty(property) {
    if (!{}.hasOwnProperty.call(this.globalProperty, property)) {
      throw new Error(`Global does not have any property ${property}`);
    }
    return delete this.globalProperty[property];
  }

  listProperty() {
    return Object.keys(this.globalProperty);
  }

  isPropertyExist(property) {
    if (!{}.hasOwnProperty.call(this.globalProperty, property)) {
      return false;
    }
    return true;
  }

  pipe(absolutePath) {
    if (!file.isFileExist(absolutePath)) {
      throw new Error(`File not found in this path ${absolutePath}`);
    }

    let config = file.readFile(absolutePath);
    try {
      config = JSON.parse(config);
      this.globalProperty = Object.assign(this.globalProperty, config);
    } catch (exp) {
      throw new Error('File is not a valid Json');
    }
  }
}

let globalInstance = null;

module.exports = (function init() {
  if (!globalInstance) {
    globalInstance = new Global();
    if (process && process.env && process.env.GLOBAL_CONFIG_FILE) {
      globalInstance.pipe(process.env.GLOBAL_CONFIG_FILE);
    }
    return globalInstance;
  }
  return globalInstance;
}());
