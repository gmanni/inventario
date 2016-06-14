angular.module('computer', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('computer').config(function($stateProvider) {

    $stateProvider.state('elencopc', {
        url: '/elencopc',
        views:{
			'': {templateUrl: 'partial/home/home.html'},
			'corpo@elencopc': {templateUrl: 'computer/partial/elenco/elenco.html'}
        }
        
    });
    $stateProvider.state('aggiungipc', {
        url: '/aggiungipc',
        views:{
            '': {templateUrl: 'partial/home/home.html'},
            'corpo@aggiungipc': {templateUrl: 'computer/partial/aggiungi/aggiungi.html'}
        }
    });
    /* Add New States Above */

});

