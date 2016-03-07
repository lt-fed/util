/**
 * Created by Yuji on 2016/3/4.
 */
define(['is'], function (is) {
  describe('Module IS', function () {
    describe('typeList', function () {
      describe('#isArray', function () {
        it('should return true when given an array', function () {
          expect(is.isArray([])).toEqual(true);
        });
      });
      describe('#isNaN', function () {
        it('should return false when not given a NaN', function () {
          expect(is.isNaN(1)).toEqual(false);
        });
        it('should return true when given a NaN', function () {
          expect(is.isNaN(NaN)).toEqual(true);
        });

      });
      describe('#isNumber', function () {
        it('should return false when not given a Number', function () {
          expect(is.isNumber(NaN)).toEqual(false);
          expect(is.isNumber('abc')).toEqual(false);
        });
        it('should return true when given a NaN', function () {
          expect(is.isNumber(1234431)).toEqual(true);
        });
      });
      describe('#isObject', function () {
        it('should return true if it\'s obj', function(){
          expect(is.isObject({})).toEqual(true);
          typeof Object.create ==='function'&&expect(is.isObject(Object.create(null))).toEqual(true);
        });
        it('should return false if given an array', function(){
          expect(is.isObject([])).toEqual(false);
        });
      });
      describe('#isFunction', function () {
        it('should return what is is', function () {
          expect(is.isFunction(function(){})).toEqual(true);
          expect(is.isFunction(new Function('a', 'return a'))).toEqual(true);
          expect(is.isFunction(document.getElementById)).toEqual(true);
          expect(is.isFunction(undefined)).toEqual(false);
        })
      });

      describe('#isDOMnode', function () {
        it('should return if it\'s a DOM node', function(){
          var node = document.createElement('a');
          expect(is.isDOMnode(node)).toEqual(true);
          expect(is.isDOMnode({})).toEqual(false);
        });
      })
      describe('#isString', function () {
        it('should return if it is string', function () {
          expect(is.isString('123')).toEqual(true);
          expect(is.isString(123)).toEqual(false);
          expect(is.isString(String('abc'))).toEqual(true);
        })

      });
      describe('#isNull', function () {
        it('should return if it is really null', function () {
          expect(is.isNull(null)).toEqual(true);
          expect(is.isNull(undefined)).toEqual(false);
        })
      });
    });


    describe('inputValidator', function () {

      var pattern = '  should return whether it is';
      it('#email' + pattern, function () {
        expect(is.email('qaq@luo.bo')).toEqual(true);
        expect(is.email('qqq@a.b')).toEqual(false);
        expect(is.email('测试')).toEqual(false);
      });
      it('#phoneNumber' + pattern, function () {
        expect(is.phoneNumber("123324435")).toEqual(true);
        expect(is.phoneNumber(123332334)).toEqual(true);
        expect(is.phoneNumber("a2134")).toEqual(false);
      });
      it('#zipcode' + pattern, function () {

      });
      it('#password' + pattern, function () {

      });
      it('#name' + pattern, function () {

      });
      it('#nickName' + pattern, function () {

      });
      it('#city' + pattern, function () {

      });
      it('#address' + pattern, function () {

      });
      it('#couponCode' + pattern, function () {

      });
      it('#cardNumber' + pattern, function () {

      });
      it('#secureCode' + pattern, function () {

      });
      it('#quantity' + pattern, function () {
        expect(is.quantity(0.1)).toEqual(false);
        expect(is.quantity(123)).toEqual(true);
        expect(is.quantity('0.1')).toEqual(false);
        expect(is.quantity('123')).toEqual(true);
      });
      it('#price' + pattern, function () {
        expect(is.price(3.22)).toEqual(true);
        expect(is.price('3.22')).toEqual(true);
        expect(is.price(3.113)).toEqual(false);
        expect(is.price('$$')).toEqual(false);
      });
    })
  })
});