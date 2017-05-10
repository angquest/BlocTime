angular
    .module('BlocTime')
    .controller('CountDownCtrl', function($scope, $interval, $filter, $log) {
    
    var workTimer = 7; //1500
    var shortBreak = 4; //300
    var longBreak = 10; //1800

    $scope.completedWorkSession = 1;
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
            $scope.completedWorkSession++;
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
        if($scope.completedWorkSession % 4 === 0) {
            console.log($scope.completedWorkSession);
            $scope.counter = longBreak;
            $scope.completedWorkSession = 1;
        } else {
            $scope.counter = shortBreak;
        }
    };
    
    $scope.sidebarOpen = function() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        //document.getElementById("openNav").style.display = "none";
    };
    
    $scope.sidebarClose = function() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        //document.getElementById("openNav").style.display = "inline-block";
    };
    
});