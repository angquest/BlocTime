//This is set up differently on cp-7

angular 
    .module('BlocTime')
    .factory('Tasks', function($scope, $filter, $firebaseArray){

        var ref = firebase.database().ref();
        
        //download tasks into a synchronized array
        var tasks = $firebaseArray(ref);
        
        return {
            all: tasks
            //remaining logic for tasks
        }

});