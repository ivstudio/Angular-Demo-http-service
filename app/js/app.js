// 'use strict'

var travelApp = angular.module('travelApp', [
		'ngRoute',
		'hotelCtrl'
]);

travelApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/hotel', {
		templateUrl: 'partials/hotel.html',
		controller:'HotelController',
	}).
	when('/details/:hotelId', {
		templateUrl: 'partials/details.html',
		controller:'DetailsController'
	}).
	otherwise({
		redirectTo: '/hotel'
	});

}]);