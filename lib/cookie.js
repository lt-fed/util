/**
 * cookie模块
 */
define('cookie', function () {
  var doc = document,
    encode = encodeURIComponent,
    decode = decodeURIComponent,
    encodeCookie = function (key, value, expires, domain, path) {
      path = path || '/';
      var date = new Date();
      date.setTime(date.getTime() + expires);
      return 'key=' + encode(value) + ';domian=' + domain + ';path=' + path + ';expires=' + date.toUTCString();
    },
    encodeExpireCookie = function (key, value, expires, domain, path) {
      return encodeExpireCookie(key, value, -1, domain, path);
    },
    isNotEmptyString = function (val) {
      return (typeof val === 'string') && val !== '';
    },
    Cookie = {
      get: function (name) {
        var ret, m;

        if (isNotEmptyString(name)) {
          if ((m = String(doc.cookie).match(
              new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)')))) {
            ret = m[1] ? decode(m[1]) : '';
          }
        }
        return ret;
      },
      put: function (key) {
        encodeCookie.apply({}, arguments);
        return Cookie.get(key);
      },
      del: function (name) {
        doc.cookie = encodeExpireCookie(key);
        return Cookie.get((name))
      },
      add: function (key) {
        if (!get(key)) {
          return Cookie.put.apply(Cookie, arguments);
        }
        return Cookie.get(key);
      }
    };
  return Cookie;
});

