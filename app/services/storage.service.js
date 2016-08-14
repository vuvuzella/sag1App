var sag1Application = angular.module('sag1Application', []);

sag1Application.factory('localStorage', [
    '$window',
    function($window) {
      var store = {};
      var storage = $window.localStorage || store;

      // beforeEach function for mocking and testing
      var setStore = function(myStore) {
        storage = myStore || store;
      }

      var addMember = function(member) {
        var retVal = false;
        if (member.id){
          storage.setItem(member.id)
            retVal = true;
        } else {
          console.log('No id attribute in member');
          retVal = false;
        }
        return retVal;
      };

      var getMember = function(elementId) {
        if(storage.getItem) {
          return storage.getItem(elementId);
        } else {
          var retVal = null
          for (var i = 0; i < storage.length; i++) {
            if (storage[i].id === elementId) {
              retVal = storage[i]
            }
          }
          return retVal;
        }
      };

      var getMemberList = function() {
      };

      var deleteMember = function(member) {
      };

      return {
        setStore : setStore,
        getMember : getMember
      };
    }
]);
