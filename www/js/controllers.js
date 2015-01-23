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
             },function(){
              $scope.viewModel.users.length=0;
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
            
            
    .controller('WeatherCtrl', function($scope, $stateParams, WeatherService) {
      $scope.viewModel = {};
      $scope.viewModel.weathers = [];
      WeatherService.getblrweather().then(function(){
       $scope.viewModel.weathers.length=0;
       $scope.viewModel.weathers = WeatherService.data.Weatherdata;
       angular.forEach($scope.viewModel.weathers,function(weather){
        weather.iconUrl = "http://openweathermap.org/img/w/" + weather.weather[0].icon +".png";
       })
       $scope.viewModel.showResults= true;
      });       
    })
 
    .controller('TimeZoneCtrl', function($scope, $stateParams) {
      $scope.blrtime = new Date( new Date().getTime() + 5.50 * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
      $scope.mplstime = new Date( new Date().getTime() - 6 * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
    })


.controller('HelpDeskCtrl', function($scope, $stateParams) {
            $scope.callnumber = function(number) {
              window.plugins.CallNumber.callNumber(onSuccess, onError, number);
            }
            function onSuccess()
            {
                alert('onSuccess');
            }
            function onError()
            {
                alert('onError');
            }

            });


