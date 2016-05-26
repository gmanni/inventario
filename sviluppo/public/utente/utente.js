angular.module('utente', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('utente').config(function($stateProvider) {

    $stateProvider.state('dettaglio', {
        url: '/dettaglio/:id',
        views:{
            '': {templateUrl: 'partial/home/home.html'},
            'corpo@dettaglio': {templateUrl: 'utente/partial/dettaglio/dettaglio.html'}
        }
        
    });
    $stateProvider.state('aggiungi', {
        url: 'aggiungi',
        views:{
            '': {templateUrl: '/partial/home/home.html'},
            'corpo@aggiungi': {templateUrl: 'utente/partial/aggiungi/aggiungi.html'}
        }
        
    });
    $stateProvider.state('elenco', {
        url: '/elenco',
        views:{
            '': {templateUrl: 'partial/home/home.html'},
            'corpo@elenco': {templateUrl: 'utente/partial/elenco/elenco.html'}
        }
        
    });
    /* Add New States Above */

});
