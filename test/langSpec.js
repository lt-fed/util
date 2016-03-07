/**
 * Created by Administrator on 2016/3/4.
 */
define(['lang'], function(lang){
  describe('Module lang', function(){
    describe('#hasProp', function(){
      it('should return true if has ownProperty ', function(){
        var test = {a:1};
        expect(lang.hasProp(test, 'a')).toEqual(true);
      });
      it('should return true if has ownProperty even hasOwnProperty is overwritten', function(){
        var test = {
          a:1,
          hasOwnProperty: function(){
            return false;
          }
        };
        expect(lang.hasProp(test, 'a')).toEqual(true);
      });
      it('should return false if not owns', function () {
        var test = {
          a:1,
          hasOwnProperty: function(){
            return true;
          }
        };
        expect(lang.hasProp(test, 'b')).toEqual(false);
      });
    });
  });


  describe('Module lang', function(){
    describe('#type', function () {
      it('should return its own type', function(){
        var list = {
          'Number': 123.23,
          'Object': {},
          'String': '',
          'Array': [123],
          'Function': function(){},
          'Undefined': undefined,
          'Null': null
        };
        lang.mapObj(list, function(value, key){
          expect(lang.type(value)).toEqual(key);
        });
      });
    });
  });

  describe('Module lang', function(){
    describe('#mergeSafe', function(){
      it('should act as it is', function () {
        var obj1 = {
          a:1
        };
        var obj2 = {
          b:2
        };
        expect(lang.mergeSafe(obj1, obj2)).toEqual({
          a:1,
          b:2
        });
      });
      it('should not overwrite property', function () {
        var obj1 = {a:1};
        var obj2 = {a: 2, b: 3};
        expect(lang.mergeSafe(obj1, obj2)).toEqual({a:1, b:3});
      })
    });
  });
});