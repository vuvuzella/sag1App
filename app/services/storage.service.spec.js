'use strict';

describe('localStorage', function() {
  var localStorage;

  // Load application module
  beforeEach(module('sag1Application'));

  describe('storage.service', function() {
    var testData = [
      {
        id : 1,
        fName : 'fName rower 1',
        lName : 'lName rower 1',
        position : 'stroke rower 1',
        memberSince : '1/1/2001',
        totalDues : 128,
      },
      {
        id : 2,
        fName : 'fName rower 2',
        lName : 'lName rower 2',
        position : 'stroke rower 2',
        memberSince : '2/2/2002',
        totalDues : 256,
      },
      {
        id : 3,
        fName : 'fName rower 3',
        lName : 'lName rower 3',
        position : 'stroke rower 3',
        memberSince : '3/3/2003',
        totalDues : 512,
      }
    ];

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

    it('should return a stored element', function() {
      localStorage.setStore([testData[0]]);
      expect(localStorage.getMember(testData[0].id)).toEqual(testData[0]);
    });
  });
}); 
