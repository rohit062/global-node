/**
 * @author Rohit Salaria
 * @description this module contains class that helps manage global variable in application
 * @createOn 27-dec-2018
 */


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

 }

let globalInstance = null;

module.exports = (function(){
  if(!globalInstance){
    globalInstance = new Global();
    return globalInstance;
  }
  return globalInstance;
})();
