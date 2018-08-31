AngularJS Envato API Wrapper
================

An AngularJS wrapper to easily access the data from the Envato's Marketplaces using their API. 

[LIVE DEMO] (http://winstef.github.io/AngularJS-Envato-API-Wrapper)

## Dependency

[Angular-cache v2](https://github.com/jmdobry/angular-cache) is used to avoid unnecessary API calls.


## How to use

Copy the __marketplaces__ service and import it in your __controller__ :

```javascript
myApp.controller('mainCtrl', ['marketplaces', '$scope', function (marketplaces, $scope) {
  marketplaces.load({
    set:"activeThreads",
    param:"themeforest",
    ttl:180
  }).
  then(function (data){
    $scope.threads = data["active-threads"];
  });
}]);
```
