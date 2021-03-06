var GridRef = require ("./grid_ref")

var Mountain = function(options){
  this._id = options.id;
  this._name = options.name;
  this._height = options.height;
  this._gridRef = new GridRef(options.gridRef);
  this._latLng = options.latLng;

  Object.defineProperty(this, "id", {
    get: function(){
      return this._id;
    }
  });

  Object.defineProperty(this, "name", {
    get: function(){
      return this._name;
    }
  });

  Object.defineProperty(this, "height", {
    get: function(){
      return this._height;
    }
  });

  Object.defineProperty(this, "gridRef", {
    get: function(){
      return this._gridRef;
    }
  });

  Object.defineProperty(this, "latLng", {
    get: function(){
      return this._latLng;
    }
  });

  Object.defineProperty(this, "bagged", {
    get: function(){
      return this._bagged;
    }
  });

  Object.defineProperty(this, "weatherStation", {
    get: function(){
      return this._weatherStation;
    }
  });
};

module.exports = Mountain;
