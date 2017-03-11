
var myApp = angular.module("myModule",[]);


myApp.controller("myController", function ($scope){
	var employee = { 
		firstName: "Greeshma",
		lastName: "Reddy",
		gender: "female"};
	
	$scope.employee = employee;
	
	var animal = {
		name: "Teddy bear",
		color: "Brown",
		teddy : "image.jpg"
	};
	
	$scope.animal = animal;
	
	var employees = [
                    { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                    { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                    { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                    
                ];

                $scope.employees = employees;
				
	var countries = [
			{
				name: "UK",
					cities: [
					{name: "London"},
					{name: "Manch"},
					{name: "Birmngm"}
				]
				
			},
			{
				name: "USA",
					cities: [
					{name: "Kansas"},
					{name: "Texas"},
					{name: "NY"}
				]
				
			},
			{
				name: "Kansas",
					cities: [
					{name: "Warrens"},
					{name: "Kansas"},
					{name: "LeeSummit"}
				]
				
			}
	
			];
	$scope.countries = countries;
	
	
});
