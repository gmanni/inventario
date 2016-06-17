angular.module('utente').controller('ElencoUtentiCtrl',['$scope', '$http', function($scope, $http){
	var apiOptions = {
  		server : "http://localhost:3000"
	};
    
    $scope.confermaCancella = false;   
    $scope.utenteDaCancellare = "";
    $scope.message = "";
	
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

    $scope.cancellaClick = function(userIndex){
        $scope.confermaCancella = true;
        $scope.utenteDaCancellare = userIndex.toString();
    }

    $scope.annullaCancellaClick = function(){
        $scope.confermaCancella = false;   
        $scope.utenteDaCancellare = "";
    }

    $scope.elimina = function(){
        $scope.confermaCancella = false;   
        userIndex = parseInt($scope.utenteDaCancellare,10);
        $scope.utenteDaCancellare = "";   
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
            $scope.message = "Utente eliminato con successo";

        }).error(function (data, status, headers, config) {
            console.log("ERROR " + data);
            $scope.message = data;
        });
    }

}]);
