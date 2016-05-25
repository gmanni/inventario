angular.module('loc8r').controller('HomeCtrl',['$scope', '$http', function($scope, $http){
	var apiOptions = {
  		server : "http://localhost:3000"
	};
	
	var request = $http({
        headers: {
    		'Content-Type': 'application/json'
           	},
            url: apiOptions.server + "/api/locations",
            method: 'GET',
            cache: false,
            transformResponse: function (data, headersGetter, status) {
                //This was implemented since the REST service is returning a plain/text response
                //and angularJS $http module can't parse the response like that.
                return {data: angular.fromJson(data)};
            }
        }).success(function (data, status, headers, config) {
            console.log("SUCCESS");
            $scope.locations = data.data;
        }).error(function (data, status, headers, config) {
            console.log("ERROR");
        });

}]);