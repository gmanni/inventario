angular.module('utente', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('utente').config(function($stateProvider) {

    $stateProvider.state('dettaglio', {
        url: '/dettaglio/:id',
        templateUrl: 'utente/partial/dettaglio/dettaglio.html'
    });
    $stateProvider.state('aggiungi', {
        url: 'aggiungi',
        templateUrl: 'utente/partial/aggiungi/aggiungi.html'
    });
    /* Add New States Above */

});

