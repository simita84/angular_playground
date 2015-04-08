var tasks= angular.module('tasksApp', [])

//controller
tasks.controller("TasksController", function($scope, TaskFactory){
	$scope.all_tasks = TaskFactory.list;
	$scope.new_task = {}

	$scope.add_task = function(new_task){
		TaskFactory.list.push(angular.copy(new_task))
	}
})

//model
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
