var store = angular.module('storeApp', []);

store.controller("StoreItemController", ['$scope', 'ItemFactory', function($scope, itemFactory){
	$scope.name = "Noah Jerreel Guillen";
	$scope.item = {};
	$scope.items = itemFactory.items;

	$scope.addItem = function(item){
		itemFactory.items.push(angular.copy(item))
		$scope.items = itemFactory.items;
		$scope.item = {};
	}
}]);

store.factory("ItemFactory", function(){

	var products = {};

	products.items = [
		{name: "Kobe 9", price: "9900"},
		{name: "Jordan 11", price: "10000"}
	];

	return products;
});

console.log(store)
