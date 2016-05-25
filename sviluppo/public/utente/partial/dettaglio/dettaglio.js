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
            	console.log("SUCCESS");
            	$scope.utente = data.data;
        	}).error(function (data, status, headers, config) {
            	console.log("ERROR");
        	});

}]);


	
	
	