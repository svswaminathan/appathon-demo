angular.module('starter.controllers', [])
.controller('AdLookupCtrl', function($scope, $stateParams) {
  $scope.viewModel = {};
  $scope.viewModel.searchText ='';
  $scope.viewModel.showResults = false;
  $scope.viewModel.names = [];
  
  var name = {};
  name.firstName = 'Swaminathan';
  name.lastName = 'Vetri';
  name.employeeId = 'T123';
  name.address = 'Bengaluru, KA, India';
  name.manager = 'Manager 1';

  $scope.viewModel.names.push(name);

  var newname = {};
  newname.firstName = 'Amit';
  newname.lastName = 'Dixit';
  newname.employeeId = 'T234';
  newname.address = 'Bengaluru, KA, India';
  newname.manager = 'Manager 2';

  $scope.viewModel.names.push(newname);

  $scope.searchGroup = function(){
    console.log('inside searchGroup');
  };

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
  
});
