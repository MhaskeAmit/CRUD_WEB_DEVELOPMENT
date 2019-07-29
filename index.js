var myApp = angular.module('myApp',[]);

            myApp.controller('registerController',['$scope','$http','$route', function($scope,$http,$route){
                $scope.username = '';
                $scope.email = '';
                $scope.password = '';

                $scope.postData = function(username, email, password){
                    var data = {
                        username : username,
                        email : email,
                        password : password
                    };

                   /* $http({
                        method : 'POST',
                        headers : {
                            "Content-Type" : "text/html"
                        },
                        url : '/api/registration',
                        data : JSON.stringify(data)
                    })
                    .then(function(res){
                        if(res.data)
                        $scope.msg = "User information submitted";
                        $route.reload();
                    },function(res){
                        $scope.msg = "Service not exists";
                        $scope.headers = res.headers();
                    }); 
                }*/

                $http({
                    method: 'POST',
                    url: '/api/registration',
                    headers: {'Content-Type': 'application/json'},
                    data : JSON.stringify(data)
                });
                
            }]);
