angular.module('computer').controller('AggiungiComputersCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
	$scope.nuovoComputer = {
		marca: "",
		modello: "",
    	tipologia: "",
    	serviceTag: "",
    	idCopernico: ""
  	}

	$scope.salva = function(){
		console.log($scope.nuovoComputer);
		var apiOptions = {
  			server : "http://localhost:3000"
		};

		var request = $http({
        	headers: {
    			'Content-Type': 'application/json'
           	},
            url: apiOptions.server + "/api/computers",
            method: 'POST',
            data: JSON.stringify($scope.nuovoComputer),
            cache: false,
            transformResponse: function (data, headersGetter, status) {
               	//This was implemented since the REST service is returning a plain/text response
               	//and angularJS $http module can't parse the response like that.
               	return {data: angular.fromJson(data)};
            }
        }).success(function (data, status, headers, config) {
           	console.log("SUCCESS");
        		
        }).error(function (data, status, headers, config) {
           	console.log("ERROR" + data);
        });
	}

}]);