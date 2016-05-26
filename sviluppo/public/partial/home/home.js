angular.module('inventario').controller('HomeCtrl',['$scope', '$http', function($scope, $http){
	var apiOptions = {
  		server : "http://localhost:3000"
	};
	
	var request = $http({
        headers: {
    		'Content-Type': 'application/json'
           	},
            url: apiOptions.server + "/api/users",
            method: 'GET',
            cache: false,
            transformResponse: function (data, headersGetter, status) {
                //This was implemented since the REST service is returning a plain/text response
                //and angularJS $http module can't parse the response like that.
                return {data: angular.fromJson(data)};
            }
        }).success(function (data, status, headers, config) {
            console.log("SUCCESS");
            $scope.utenti = data.data;
            console.log($scope.utenti);
        }).error(function (data, status, headers, config) {
            console.log("ERROR");
        });

    $scope.cancella = function(userIndex){
        console.log(userIndex);
        var request = $http({
            headers: {
                'Content-Type': 'application/json'
                },
            url: apiOptions.server + "/api/user/" + $scope.utenti[userIndex]._id,
            method: 'DELETE',
            cache: false
            // transformResponse: function (data, headersGetter, status) {
            //     //This was implemented since the REST service is returning a plain/text response
            //     //and angularJS $http module can't parse the response like that.
            //     return {data: angular.fromJson(data)};
            // }
        }).success(function (data, status, headers, config) {
            console.log("SUCCESS");
            $scope.utenti.splice(userIndex, 1);

        }).error(function (data, status, headers, config) {
            console.log("ERROR " + data);
        });        
    }

}]);