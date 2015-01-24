'use strict'

//creating an array w [$scope, http avoids issues w minification.
var hotelCtrl = angular.module('hotelCtrl', []);

hotelCtrl.controller('HotelController', ['$scope', '$http', function( $scope, $http ) {
	$http.get('js/data.json').success(function(data) {
		$scope.hotels = data;
		$scope.sortorder = '-guestRating';
	});
}]);


hotelCtrl.controller('DetailsController', ['$scope', '$http', '$routeParams', function( $scope, $http, $routeParams ) {
	$http.get('js/data.json').success(function(data) {
		$scope.hotels = data;
		$scope.whichHotel = $routeParams.hotelId;
	});
}]);