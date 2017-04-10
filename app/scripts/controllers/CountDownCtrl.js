angular
    .module('BlocTime')
    .controller('CountDownCtrl', function($scope, $interval, $filter) {
    
    var workTimer = 1500;
    var shortBreak = 300;
    
    $scope.counter = workTimer;
    $scope.buttonText = "Start";
    $scope.isTimerRunning = false;
    $scope.onBreak = false;
    
    $scope.timerDing = new buzz.sound("assets/sounds/Bell-tone.mp3", {
            preload: true                             
        });
    
    $scope.timerExpired = function() {
        $scope.timerDing.play();
        if($scope.onBreak === false){
            $scope.breakTimer();
        } else if($scope.onBreak === true) {
            $scope.counter = workTimer;
            $scope.onBreak = false;
        }
    };
    
    $scope.startTimer = function(){
        $scope.timerInterval = $interval(function() {
            $scope.counter--;
            if($scope.counter <= 0){
                $scope.timerExpired();
            }
        }, 1000);
        $scope.isTimerRunning = true;
    };
    
    $scope.resetTimer = function() {
        if($scope.isTimerRunning === true){
            $interval.cancel($scope.timerInterval);
            $scope.isTimerRunning = false;
            $scope.counter = workTimer;
        }
    };
    
    $scope.breakTimer = function() {
        $scope.onBreak = true;
        $scope.counter = shortBreak;
    };
        
//        //work timer
//        if($scope.isTimerRunning === false){
//            $scope.isTimerRunning = true;
//            $scope.buttonText = "Reset";
//        //reset work timer
//        } else if($scope.isTimerRunning === true){
//            $interval.cancel($scope.timerInterval)
//            $scope.isTimerRunning = false;
//            $scope.counter = workTimer;
//            $scope.buttonText = "Start";
//        //if counter ends
//        } else if($scope.isTimerRunning === true && $scope.counter <= 0){
//            $scope.isTimerRunning = false;
//            $scope.buttonText = "Break";
//            $scope.counter = shortBreak;
//        }
//        
//        //Break timer
//        if($scope.breakTime === false){
//            $scope.breakTime = true;
//            $scope.counter = shortBreak;
//            $scope.isTimerRunning = true;
//            $scope.buttonText = "Reset";
//        } else if($scope.counter === 0){
//            $interval.cancel($scope.timerInterval)
//            $scope.isTimerRunning = false;
//            $scope.breakTime = false;
//            $scope.buttonText = "Start";
//            $scope.counter = shortBreak;
//        }
    
    //relocated this to else if in work timer
        //reset work timer
//        if($scope.isTimerRunning === true){
//            $interval.cancel($scope.timerInterval)
//            $scope.isTimerRunning = false;
//            $scope.counter = workTimer;
//            $scope.buttonText = "Start";
//        }
        
        //only when counter goes to 0
//        $scope.$watch('counter', function(counter) {
//            if($scope.counter === 0) {
//                $interval.cancel($scope.timerInterval);
//                $scope.timerDing.play();
//                $scope.isTimerRunning = false;
//                $scope.buttonText = "Start";
//            }
//        });
//    //this was original that is working til "break" needs to go back to "start"
//    $scope.startTimer = function() {
//        $scope.counter = workTimer;
//        if($scope.isTimerRunning === false){
//            //This makes the timer go down
//            $scope.timerInterval = $interval(function() {
//                $scope.counter--;
//            }, 1000);
//            $scope.isTimerRunning = true;
//            //$scope.buttonText = "Start"
//        }
//        
//        if($scope.breakTime === false){
//            $scope.breakTime = true;
//            $scope.counter = shortBreak;
//            $scope.isTimerRunning = false;
//        } else if($scope.counter === 0){
//            $interval.cancel($scope.timerInterval)
//            $scope.isTimerRunning = false;
//            $scope.breakTime = false;
//        }
//        
//    };
//
//    
//    //Watches the counter, if workTimer gets to "0" stop timer and make sound
//    $scope.$watch('counter', function(counter) {
//        if($scope.counter === 0) {
//            $interval.cancel($scope.timerInterval);
//            $scope.timerDing.play();
//            $scope.isTimerRunning = false;
//        //these need to be relocated 
    //maybe loop this to toggleTimer()??
//            $scope.breakTime = true;
//            $scope.counter = shortBreak;
//        } 
//    });
    
    //current issue is after work and break have been completed, "break" button does not go back to Start and time does not reset to work time.
    
    
    
});