app.controller('authController', function ($scope,$rootScope,$http,$routeParams,mvNotifier,$window,$location) {
	
	$rootScope.authinfo = {};
    $scope.emailAddres ="";
    $scope.password ="";

    $scope.user = {};
    
    $scope.signIn = function() {
        console.log('call receivbed');

        if($scope.user.emailAddress=='adinesh.developer@gmail.com' && $scope.user.password=="sona@123") 
        {
             $scope.authinfo.error ="";
            $rootScope.isAuthenticated = true;
            $rootScope.loggeduserName="Dinesh";
            $rootScope.loggedEmailAddress="adinesh.developer@gmail.com";
            $location.path("/");

        }
        else
        {
            mvNotifier.error("Lgin Failed! , Email Id / Password is Incorrect");
            $scope.authinfo.error = "Email Id / Password is Incorrect";
        }
       

        };
    

  
});