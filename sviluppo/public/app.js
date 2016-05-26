angular.module('inventario', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'utente']);

angular.module('inventario').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/partial/home',
        templateUrl: 'partial/home/home.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('inventario').run(['$state', '$rootScope', function($state, $rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $state.go('home');
}]);
