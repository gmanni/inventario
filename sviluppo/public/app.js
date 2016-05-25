angular.module('loc8r', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('loc8r').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/partial/home',
        templateUrl: 'partial/home/home.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('loc8r').run(function($rootScope) {

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

});
