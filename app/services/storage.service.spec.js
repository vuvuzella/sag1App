'use strict';

describe('localStorage', function() {
  var localStorage;

  // Load application module
  beforeEach(module('sag1Application'));

  describe('storage.service', function() {
    var testData = {
      0 : {
            id : 1,
            fName : 'fName rower 1',
            lName : 'lName rower 1',
            position : 'stroke rower 1',
            memberSince : '1/1/2001',
            totalDues : 128,
          },
      1 : {
            id : 2,
            fName : 'fName rower 2',
            lName : 'lName rower 2',
            position : 'stroke rower 2',
            memberSince : '2/2/2002',
            totalDues : 256,
          },
      2 : {
            id : 3,
            fName : 'fName rower 3',
            lName : 'lName rower 3',
            position : 'stroke rower 3',
            memberSince : '3/3/2003',
            totalDues : 512,
          }
    };

    beforeEach(inject(function(_localStorage_) { // name wrangling to get the service to be tested
       localStorage = _localStorage_;
       localStorage.setStore();  // test-only phase specific function in the service
    }));

    afterEach(function() {
      if(localStorage.clear) {
        localStorage.clear();
      } else {
        localStorage = {};
      }
    })

    it('should return the first stored element', function() {
      localStorage.setStore(testData);
      expect(localStorage.getMember(Object.keys(testData)[0])).toEqual(testData[0]);
    });

    it('should return the second stored element', function() {
      localStorage.setStore(testData);
      expect(localStorage.getMember(Object.keys(testData)[1])).toEqual(testData[1]);
    });

    it('should return the third stored element', function() {
      localStorage.setStore(testData);
      expect(localStorage.getMember(Object.keys(testData)[2])).toEqual(testData[2]);
    });

    it('should be undefined', function() {
      localStorage.setStore(testData);
      expect(localStorage.getMember('random_key')).not.toBeDefined();
    });
  });
}); 
