angular.module('utente')
	.controller('DettaglioCtrl',[
		'$scope', 
		'$rootScope', 
		'$state', 
		'$stateParams', 
		'$http',
		function($scope, $rootScope, $state, $stateParams, $http){
			var apiOptions = {
  				server : "http://localhost:3000"
			};
			console.log("ID " + $stateParams.id);
            
            $scope.editing = false;

            $scope.utenteBackup = {};

  			var request = $http({
        		headers: {
    				'Content-Type': 'application/json'
           		},
            	url: apiOptions.server + "/api/user/" + $stateParams.id, 
            	method: 'GET',
            	cache: false,
            	transformResponse: function (data, headersGetter, status) {
                	//This was implemented since the REST service is returning a plain/text response
                	//and angularJS $http module can't parse the response like that.
                	return {data: angular.fromJson(data)};
            	}
        	}).success(function (data, status, headers, config) {
            	console.log("SUCCESS")
                console.log(data.data)
            	$scope.utente = data.data;
                angular.extend($scope.utenteBackup, $scope.utente);
        	}).error(function (data, status, headers, config) {
            	console.log("ERROR");
        	});

            
            $scope.toggleEditor = function(){
                $scope.editing = !$scope.editing;
            }

            $scope.cancel = function(){
                angular.extend($scope.utente, $scope.utenteBackup);
                $scope.toggleEditor();
            }

            $scope.save = function(){
                console.log($scope.utente._id);
                var request = $http({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: apiOptions.server + "/api/user/" + $scope.utente._id,
                    data: JSON.stringify($scope.utente),
                    method: 'PUT',
                    cache: false
                    // transformResponse: function (data, headersGetter, status) {
                    //     //This was implemented since the REST service is returning a plain/text response
                    //     //and angularJS $http module can't parse the response like that.
                    //     return {data: angular.fromJson(data)};
                    // }
                }).success(function (data, status, headers, config) {
                    console.log("SUCCESS");
                    angular.extend($scope.utenteBackup, $scope.utente);
                    $scope.toggleEditor();

                }).error(function (data, status, headers, config) {
                    console.log("ERROR " + data);
                });

                
            }

        }

]);


	
	
	