var tasks= angular.module('tasksApp', [])

tasks.directive("superlist", function(){
	return {
		restrict: "E",
		template: "<div>ALL TASKS.<div>"
	}
})

tasks.directive("special", function(){
	return {
		restrict: "A",
		link: function(){
			alert("List of task is loaded.")
		}
	}
})

tasks.directive("taskcategories", function(){
	return {
		restrict: "E",

		controller: function ($scope){
			$scope.categories = []

			this.addMajor = function(){
				$scope.categories.push("major")
			}

			this.addMinor = function(){
				$scope.categories.push("minor")
			}
		},

		link: function(scope, element){
			element.bind("mouseenter", function(){
				console.log(scope.categories)
			})
		}
	}
})

tasks.directive("major", function(){
	return {
		require: "taskcategories",
		link: function(scope, element, attrs, taskcategories){
			taskcategories.addMajor();
		}
	}
})

tasks.directive("minor", function(){
	return {
		require: "taskcategories",
		link: function(scope, element, attrs, taskcategories){
			taskcategories.addMinor();
		}
	}
})

//directive with mouse event handling
tasks.directive("enter", function(){
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			//sample events
			element.removeClass(attrs.leave)
			element.addClass(attrs.enter)
		})
	}
})

tasks.directive("leave", function(){
	return function(scope, element, attrs){
		element.bind("mouseleave", function(){
			//sample events
			element.removeClass(attrs.enter)
			element.addClass(attrs.leave)
		})
	}
})

//directive calling function in a controller
tasks.directive("callmethod", function(){
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.$apply(attrs.callmethod)
		})
	}
})

tasks.controller("TasksController", function($scope, TaskFactory){
	$scope.all_tasks = TaskFactory.list;
	$scope.new_task = {}

	$scope.add_task = function(new_task){
		TaskFactory.list.push(angular.copy(new_task))
	}

	$scope.load_task = function(){
		alert("Loading more task...")
	}
})

tasks.factory("TaskFactory", function(){
	var items = {
		list: [
			{description: "test task 1"},
			{description: "test task 2"},
			{description: "test task 3"}
		]
	}

	return items
})

tasks.filter('reverse', function(){
	return function(text) {
		return text.split("").reverse().join("")
	}
})
