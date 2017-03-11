

var myApp = angular.module('myApp', []);
 
myApp.controller('myController', function($scope) {
    $scope.movies = ['Ice Age', 'Frozen'];
});

myApp.directive('myMovie', function() {
  return {
    restrict: 'E',
    transclude: 'true',
    template: '<span ng-transclude></span>',
    link: function(scope, element, attr){
          element.append("<strong>"+attr.title+"</strong>");
    }
  };
});