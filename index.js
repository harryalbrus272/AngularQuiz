let app =angular.module('app1',[]);
app.controller('header-controller', function($scope){
    $scope.time = 200;
    function countController($scope, $interval){
        $interval(function (){
            $scope.time--;
        },1000, 0);
    }
    countController($scope,$interval);
    $scope.second = 2;
    function printMessage(){
        console.log('Button clicked');
    }
});
