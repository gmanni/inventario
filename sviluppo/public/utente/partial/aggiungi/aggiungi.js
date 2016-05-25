angular.module('utente').controller('AggiungiCtrl',['$scope', '$http', '$state', function($scope, $http, $state){
	$scope.nuovoUtente = {
		nome: "",
		cognome: "",
	}

	$scope.salva = function(){
		console.log($scope.nuovoUtente);
		var apiOptions = {
  			server : "http://localhost:3000"
		};

		var request = $http({
        	headers: {
    			'Content-Type': 'application/json'
           	},
            url: apiOptions.server + "/api/users",
            method: 'POST',
            data: JSON.stringify($scope.nuovoUtente),
            cache: false,
            transformResponse: function (data, headersGetter, status) {
               	//This was implemented since the REST service is returning a plain/text response
               	//and angularJS $http module can't parse the response like that.
               	return {data: angular.fromJson(data)};
            }
        }).success(function (data, status, headers, config) {
           	console.log("SUCCESS");
        		$state.go('home');
        }).error(function (data, status, headers, config) {
           	console.log("ERROR" + data);
        });
	}

}]);
