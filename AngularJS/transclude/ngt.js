


/* Transclude is a setting to tell angular to capture everything that is put inside the directive in the markup and use it somewhere(Where actually the ng-transclude is at) in the directive's template. Read more about this under Creating a Directive that Wraps Other Elements section on documentation of directives. */

angular.module('myApp', []).directive('hero', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: { name:'@' },
      template: '<div>' +
                  '<div>{{name}}</div><br>' +
                  '<div ng-transclude></div>' +
                '</div>'
    };
  });
  
  