'use strict';

angular.module('myApp.view1', ['pascalprecht.translate', 'sn.skrollr'])
  .controller('View1Ctrl', ['$http', '$scope','$anchorScroll','$location', '$window',
    function($http, $scope, $anchorScroll, $location, $window) {
      $scope.offset = 0;
      $scope.message = '';
      $scope.currentPage = 1;
      $scope.totalCharacters = 1485;
      $scope.totalPages = Math.floor($scope.totalCharacters/10) + 1;
      $scope.getAll = "https://gateway.marvel.com:443/v1/public/characters?limit=10&offset="+$scope.offset+"&apikey=25edc4d33b05ade4e5234c3f22ede54b"

      angular.element(document).ready(function(){
        if ($scope.currentPage == 1) {
          angular.element(document.querySelector('#btn-previus')).addClass("inactive");
        } else {
          angular.element(document.querySelector('#btn-previus')).removeClass("inactive");
        }
      });

      $http.get('view1/dataExample.json')
        .success(function(data){
          $scope.response = data;
        })
        .error(function(){
          $scope.message = "An error has occurred, please try again!";
        });

      // Pagination
      $scope.changePage = function(pageNumber) {
        console.log(pageNumber);
        if (pageNumber == 1) {
          $scope.offset = 0;
          $scope.currentPage = 1;
          $scope.getAll = "https://gateway.marvel.com:443/v1/public/characters?limit=10&offset="+$scope.offset+"&apikey=25edc4d33b05ade4e5234c3f22ede54b"
        } else if (pageNumber > 1 && pageNumber < ($scope.totalPages + 1)) {
          $scope.offset = (10 * (pageNumber - 1)) + 1;
          $scope.currentPage = pageNumber;
          $scope.getAll = "https://gateway.marvel.com:443/v1/public/characters?limit=10&offset="+$scope.offset+"&apikey=25edc4d33b05ade4e5234c3f22ede54b"
        }

        $http.get('view1/dataExample.json')
          .success(function(data){
            $scope.response = data;
          })
          .error(function(){
            $scope.message = "An error has occurred, please try again!";
          });
      }


    }
  ]);
