/**
 * Created by Administrator on 2016/3/3.
 */
define('is', ['./lang'], function (lang) {
  var is = {};

  var typeFactory = function (name, extra) {
    return function (obj) {
      return lang.type(obj) === name && (extra ? extra(obj) : true);
    }
  };

  /**
   * 类型判定
   * 需要Array.prototype.forEach
   */
  ['isArray', 'isFunction', 'isNull', 'isObject', 'isString'].forEach(function (val) {
    lang.addProperty(is, val, typeFactory(val.slice(2)));
  });

  is.isNumber = typeFactory('Number', function (num) {
    return num === num;
  });

  is.isNaN = function (num) {
    return num !== num;
  }


  /**
   * 输入验证
   * 主要是判断类型
   */
  var patternMap = {
    email: /^[A-Za-z0-9](([_\.\+\-]*[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]*[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/,
    phoneNumber: /^1/,
    zipCode: / /,
    password: / /,
    name: / /,
    nickName: / /,
    city: / /,
    address: / /,
    couponCode: / /,
    cardNumber: / /,
    secureCode: / /,
    quantity: /^\d+$/,
    price: /^\d+\.\d{2}$/
  };

  lang.merge(is, lang.mapObj(patternMap, function (val) {
    return function (givenStr) {
      givenStr = String(givenStr);
      return val.test(givenStr);
    }
  }));

  return is;
});