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

      });
      describe('#isString', function () {

      });
      describe('#isNull', function () {

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