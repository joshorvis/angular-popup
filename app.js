var app = angular.module('app', ['artemdemo.popup', 'ngSanitize']);

app.controller('mainCtrl',[
    '$scope',
    '$popup',
function(
    $scope,
    $popup){

    $scope.firstExample = function() {
        $popup.confirm({
           title: 'Alert',
           template: 'Example #1',
           okText: 'OK button text'
        });
    }

    }]);