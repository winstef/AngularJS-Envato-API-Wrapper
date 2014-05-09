'use strict';

var controllers = angular.module('angulato.controllers', []);

controllers.controller('mainCtrl', ['marketplaces', '$scope', function (marketplaces, $scope) {
	
  marketplaces.load({set:"activeThreads", param:"themeforest", ttl:180}).then(function (data){
    $scope.threads = data["active-threads"];
  });
  
  marketplaces.load({set:"numberOfFiles", param:"themeforest", ttl:3600}).then(function (data){
    $scope.categories = data["number-of-files"];
  });
  
  marketplaces.load({set:"forumPosts", param:"collis", ttl:180}).then(function (data){
    $scope.posts = data["forum_posts"];
  });
  
  marketplaces.load({set:"threadStatus", param:"14849", ttl:180}).then(function (data){
    $scope.status = data["thread-status"];
  });
  
  marketplaces.load({set:"totalUsers", param:"", ttl:3600}).then(function (data){
    $scope.users = data["total-users"];
  });
  
  marketplaces.load({set:"itemPrices", param:"2833226", ttl:3600}).then(function (data){
    $scope.prices = data["item-prices"];
  });
    
  marketplaces.load({set:"user", param:"collis", ttl:180}).then(function (data){
    $scope.user = data["user"];
  });
  
  marketplaces.load({set:"userItemsBySite", param:"collis", ttl:180}).then(function (data){
    $scope.userItems = data["user-items-by-site"];
  });
  
  marketplaces.load({set:"search", param:"themeforest,wordpress,estate", ttl:180}).then(function (data){
    $scope.results = data["search"];
  });
  
  marketplaces.load({set:"popular", param:"themeforest", ttl:3600}).then(function (data){    
    $scope.popular = data["popular"];
  });
  
  marketplaces.load({set:"item", param:"2833226", ttl:3600}).then(function (data){    
    $scope.item = data["item"];
  });
  
  marketplaces.load({set:"collection", param:"4103828", ttl:180}).then(function (data){    
    $scope.collection = data["collection"];
  });
  
  marketplaces.load({set:"features", param:"themeforest", ttl:1}).then(function (data){    
    $scope.features = data["features"];
  });
  
  marketplaces.load({set:"newFiles", param:"themeforest,site-templates", ttl:3600}).then(function (data){    
    $scope.newFiles = data["new-files"];
  });
  
  marketplaces.load({set:"newFilesFromUser", param:"collis,themeforest", ttl:900}).then(function (data){    
    $scope.newFilesFromUser = data["new-files-from-user"];
  });
  
  marketplaces.load({set:"randomNewFiles", param:"themeforest", ttl:600}).then(function (data){    
    $scope.randomNewFiles = data["random-new-files"];
  });

	
}]);
