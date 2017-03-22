angular
    .module('BlocTime')
    .controller('CountDownCtrl', function($scope, $interval, $filter) {
    
    var workTimer = 1500;
    var shortBreak = 300;
    
    $scope.counter = workTimer;
    $scope.isTimerRunning = false;
    $scope.breakTime = false;
    
    $scope.timerDing = new buzz.sound("assets/sounds/Bell-tone.mp3", {
            preload: true                             
        });
    
    $scope.startTimer = function() {
        $scope.counter = workTimer;
        if($scope.isTimerRunning === false){
            //This makes the timer go down
            $scope.timerInterval = $interval(function() {
                $scope.counter--;
            }, 1000);
            $scope.isTimerRunning = true;
        } 
    };

    $scope.resetTimer = function() {
        if($scope.isTimerRunning === true){
            $interval.cancel($scope.timerInterval);
            $scope.isTimerRunning = false;
            $scope.counter = workTimer;
        }
    };
    
    //Watches the counter, if workTimer gets to "0" stop timer and make sound
    $scope.$watch('counter', function(counter) {
        if($scope.counter === 0) {
            $interval.cancel($scope.timerInterval);
            $scope.timerDing.play();
            $scope.isTimerRunning = false;
        }
    });
    
    
    
});