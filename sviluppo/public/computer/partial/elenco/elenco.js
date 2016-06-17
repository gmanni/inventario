angular.module('computer').controller('ElencoComputersCtrl', ['$scope', '$http', function($scope, $http){
	var apiOptions = {
  		server : "http://localhost:3000"
	};

    $scope.confermaCancella = false;   
    $scope.computerDaCancellare = "";
    $scope.message = "";

	var request = $http({
        headers: {
    		'Content-Type': 'application/json'
           	},
        url: apiOptions.server + "/api/computers",
        method: 'GET',
        cache: false,
        transformResponse: function (data, headersGetter, status) {
                //This was implemented since the REST service is returning a plain/text response
                //and angularJS $http module can't parse the response like that.
            return {data: angular.fromJson(data)};
        }
    }).success(function (data, status, headers, config) {
    	console.log("SUCCESS");
        $scope.computers = data.data;
        console.log($scope.computers);
	}).error(function (data, status, headers, config) {
    	console.log("ERROR");
	});

    $scope.cancellaClick = function(computerIndex){
        $scope.confermaCancella = true;
        $scope.computerDaCancellare = computerIndex.toString();
    }

    $scope.annullaCancellaClick = function(){
        $scope.confermaCancella = false;   
        $scope.computerDaCancellare = "";
    }

    $scope.elimina = function(){
        $scope.confermaCancella = false;   
        computerIndex = parseInt($scope.computerDaCancellare, 10);
        $scope.utenteDaCancellare = "";   
        console.log(computerIndex);
        
        var request = $http({
            headers: {
                'Content-Type': 'application/json'
                },
            url: apiOptions.server + "/api/computer/" + $scope.computers[computerIndex]._id,
            method: 'DELETE',
            cache: false
            // transformResponse: function (data, headersGetter, status) {
            //     //This was implemented since the REST service is returning a plain/text response
            //     //and angularJS $http module can't parse the response like that.
            //     return {data: angular.fromJson(data)};
            // }
        }).success(function (data, status, headers, config) {
            console.log("SUCCESS");
            $scope.computers.splice(computerIndex, 1);
            $scope.message = "Computer eliminato con successo";

        }).error(function (data, status, headers, config) {
            console.log("ERROR " + data);
            $scope.message = data;
        });
    }

}]);



