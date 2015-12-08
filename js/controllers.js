var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',function ($scope, $http) {
    $http.get('phones/countries.json.').success(function(data) {
      $scope.countries = data;
	});
});