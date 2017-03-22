(function() {
    function timeCode() {
      return function(seconds) {
          seconds = Number.parseFloat(seconds);
          //make whole number
          var wholeSeconds = Math.floor(seconds);
          var minutes = Math.floor(wholeSeconds / 60);
          remainingSeconds = wholeSeconds % 60;
          var output = minutes + ':';
          
          if(remainingSeconds < 10){
              //output = output + '0'
              output += '0'; 
          }
          //output = output + remainingSeconds
          output += remainingSeconds;
          return output;
      }  
    };
    
    angular
        .module('BlocTime')
        .filter('timeCode', timeCode);
    
})();