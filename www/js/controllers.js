angular.module('starter.controllers', [])

.controller('AdLookupCtrl', function($scope, $stateParams, ADLookupService) {
            $scope.viewModel = {};
            $scope.viewModel.searchText ='';
            $scope.viewModel.showResults = false;
            $scope.viewModel.users = [];
            
            $scope.searchGroup = function(){
            ADLookupService.getUsers($scope.viewModel.searchText).then(function(){
                                                                       $scope.viewModel.users.length=0;
                                                                       $scope.viewModel.users = ADLookupService.data.Users;
                                                                       $scope.viewModel.showResults= true;
                                                                       });
            
            
            $scope.clearText = function(){
            viewModel.searchText = '';
            }
            
            $scope.toggleName = function(name) {
            if ($scope.isNameShown(name)) {
            $scope.shownName = null;
            } else {
            $scope.shownName = name;
            }
            };
            
            $scope.isNameShown = function(name) {
            return $scope.shownName === name;
            };
        };
    })
            
            
            .controller('WeatherCtrl', function($scope, $stateParams) {
                        $scope.weathers = [
                                          {'location': 'Bangalore',
                                          'temp': '75',
                                          'warn': 'No warnnig'},
                                          {'location': 'Minneapollis',
                                          'temp': '32',
                                          'warn': 'severe snow storm'},
                                          ];
                        
             });
