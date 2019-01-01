/**
 * @author Rohit Salaria
 * @description this module contains class that helps manage global variable in application
 * @createOn 27-dec-2018
 */
const file = require('./file');

 class Global {

   constructor(){
    this.globalProperty = {};
   }

  setProperty(property, value){
    this.globalProperty[property] = value;
  }
   
  getValue(property){
    if( !this.globalProperty.hasOwnProperty(property) ){
      return new Error('Global does not have any property '+ property);
    }
    return this.globalProperty[property];
  }

  deleteProperty(property){
  if( !this.globalProperty.hasOwnProperty(property) ){
      return new Error('Global does not have any property '+ property);
    }
    return delete this.globalProperty[property];
  }

  listProperty(){
    return Object.keys(this.globalProperty);
  }

  isPropertyExist(property){
    if( !this.globalProperty.hasOwnProperty(property) ){
      return false;
    }
    return true;
  }
  
  pipe(absolutePath){
    if(!file.isFileExist(absolutePath)){
      throw new Error('File not found in this path' + absolutePath);
    }
    let config = require(absolutePath);
    try{
      config = JSON.parse(JSON.stringify(config));
      this.globalProperty = Object.assign(this.globalProperty, config);
    }catch(exp){
      throw new Error('File is not a valid Json');
    }
  }

 }

let globalInstance = null;

module.exports = (function(){
  if(!globalInstance){
    globalInstance = new Global();
    if(process.env.GLOBAL_CONFIG_FILE){
      globalInstance.pipe(process.env.GLOBAL_CONFIG_FILE);
    }
    return globalInstance;
  }
  return globalInstance;
})();
