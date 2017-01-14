'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version',
  'sn.skrollr',
  'ngFlowtype'
])

  .config(["snSkrollrProvider", function(snSkrollrProvider) {
    snSkrollrProvider.config = { smoothScrolling: true };
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider.when('/', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .run(["snSkrollr", function(snSkrollr) {
    snSkrollr.init();
  }]);
