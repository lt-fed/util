/**
 * Created by Administrator on 2016/3/2.
 */

define(function () {
  var lang = {
    hasProp: function (ctx, property) {
      return {}.hasOwnProperty.call(ctx, property);
    },
    merge: function (target, from) {
      lang.mapObj(from, function(val, key){
        target[key] = val;
      });
    },
    mergeSafe: function (target, from) {
      lang.mapObj(from, function(val, key){
        if (!lang.hasProp(target, key)) {
          target[key] = from[key];
        }
      });
    },
    type: function (obj) {
      return {}.toString.call(obj).slice('[object '.length, -1);
    },
    addProperty: function(target, key, value){
      if(!lang.hasProp(target, key)){
        target[key] = value;
      }
    },
    mapObj: function(obj, fn){
      var key,
        result = {};
      for (key in obj) {
        if (lang.has(obj, key)) {
          result[key] = fn.call(obj, obj[key], key);
        }
      }
      return result;
    }
  };

  return lang;

})