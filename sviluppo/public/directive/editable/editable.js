angular.module('inventario').directive('editable', function() {
	return {
		restrict: 'AE',
		templateUrl: 'directive/editable/editable.html',
		scope: {
			value: '=editable',
			field: '@fieldType'
		},
		
		controller: function($scope){
			$scope.field = ($scope.field) ? $scope.field : 'text';

			$scope.editor = {
                showing: false,
                value: $scope.value
            };
            $scope.toggleEditor = function(){
                $scope.editor.showing = !$scope.editor.showing;
                $scope.editor.value = $scope.value;
            };
            $scope.save = function(){
				$scope.value = $scope.editor.value;
				$scope.toggleEditor();
			}


		}
		// link: function(scope, element, attrs, fn) {


		// }
	};
});
