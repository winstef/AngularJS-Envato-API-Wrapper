'use strict';

var services = angular.module('angulato.services', []);

services.factory('marketplaces', ['$http', '$q', '$angularCacheFactory', function($http, $q, $angularCacheFactory) {
  
  var ENVATO_API = {
    version : 'edge', // 'v1', v2', 'v3' available
    url: 'http://marketplace.envato.com/api/',
    method: '.json',
    endPoints : {
      activeThreads     : '/active-threads',
      numberOfFiles     : '/number-of-files',
      forumPosts        : '/forum_posts',
      threadStatus      : '/thread-status',
      totalUsers        : '/total-users',
      itemPrices        : '/item-prices',
      user              : '/user',
      userItemsBySite   : '/user-items-by-site',
      search            : '/search',
      popular           : '/popular',
      item              : '/item',
      collection        : '/collection',
      features          : '/features',
      newFiles          : '/new-files',
      newFilesFromUser  : '/new-files-from-user',
      randomNewFiles    : '/random-new-files'
    }
  };

			
  var defaultCache = $angularCacheFactory('defaultCache', {                
      deleteOnExpire  : 'passive',
      storageMode     : 'localStorage'
  });

  var dataCache = $angularCacheFactory.get('defaultCache');	


  function getData(url, type, ttl){

    var deferred = $q.defer();

    if (dataCache.get(type)) {

      var getCache = dataCache.get(type, {
        onExpire: function (key, value) {
          $http.get(url).
          success(function (data) {
            defaultCache.put(type, data, {maxAge: ttl*1000});
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {

          });
        }
      });

      deferred.resolve(getCache);

    } else {
      $http.get(url).
      success(function (data) {
        defaultCache.put(type, data, {maxAge: ttl*1000});
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        
      });
    }

    return deferred.promise;

  }

  var baseUrl = ENVATO_API.url+ENVATO_API.version;

  return {

    load: function(options){

      var params = (options.param)?":"+options.param:"";
      var endPoints = ENVATO_API.endPoints[options.set];

      return getData(baseUrl+endPoints+params+ENVATO_API.method, options.set, options.ttl);
    }

  }
	
}]);