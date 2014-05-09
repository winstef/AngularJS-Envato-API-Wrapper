"use strict";

var app = angular.module('angulato', ['angulato.controllers', 'jmdobry.angular-cache', 'ngRoute', 'angulato.services']);

app.config(['$routeProvider',
	function ($routeProvider){	
		$routeProvider
		.when("/", {controller:"mainCtrl", templateUrl:"demo.html" })		
		.otherwise({redirectTo: "/"});
	}
]);