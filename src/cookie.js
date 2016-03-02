define('cookie', ['lang'], function (lang) {
  var doc = document,
    encodeCookie = function (key, value, expires, domain, path) {
      path = path || '/';
      var date = new Date();
      date.setTime(date.getTime() + expires);
      return 'key=' + value + ';domian=' + domain + ';path=' + path + ';expires=' + date;
    },
    decodeCookie = function (cookie) {
      var list = cookie.split('; '),
        result = {},
        regex = /^([^=]+)=(.*$)/,
        matched;
      list.forEach(function (val) {
        matched = val.match(regex);
        if (matched) {
          result[matched[1]] = matched[2];
        }
      });
      return result;
    },
    encodeExpireCookie = function (key) {
      var date = new Date();
      date.setTime(date.getTime() - 1e4);
      return 'key=1;expires=' + date;
    };

  return {
    /**
     *总是会覆盖
     */
    put: function (key) {
      encodeCookie.apply({}, arguments);
      return this.get(key);
    },
    get: function () {
      return decodeCookie(doc.cookie)[key];
    },
    del: function (key) {
      doc.cookie = encodeExpireCookie(key);
    },
    /**
     * 不存在时增加，存在时return
     */
    add: function (key) {
      if (!this.get(key)) {
        this.put.apply(this, arguments);
      }
      return this.get(key);
    }
  }

});