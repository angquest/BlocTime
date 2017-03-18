angular
    .module('BlocTime', [])
    .controller('CountDownCtrl', function($scope, $filter) {
    
//how do you make the time intervals global?
    var workTimer = 1500;
    var shortBreak = 300;
    
    $scope.counter = workTimer;
    $scope.isTimerRunning = false;
    $scope.breakTime = false;
    
    $scope.startTimer = function(){
        $scope.isTimerRunning = true;
    };
    
    
});