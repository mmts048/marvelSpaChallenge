'use strict';

angular.module('myApp.view1', ['pascalprecht.translate', 'sn.skrollr'])

  .controller('View1Ctrl', ['$http', '$scope','$anchorScroll','$location', '$window',
    function($http, $scope, $anchorScroll, $location, $window) {

      $scope.goToSection = function(section){
        angular.element('html, body').animate({scrollTop:angular.element('#' + section).position().top}, 1000);
        //reset to old to keep any additional routing logic from kicking in
      };

    }
  ]);
