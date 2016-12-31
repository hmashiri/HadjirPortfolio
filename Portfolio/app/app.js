(function() {
    'use strict';


    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise("/aboutme");

        $stateProvider
            .state('aboutme', {
                url: "/aboutme",
                templateUrl: "app/partials/aboutme.html",
                controller: 'PortfolioController',
                controllerAs: 'vm'
            })
            .state('projects', {
                url: "/projects",
              	templateUrl: "app/partials/projects.html",
                controller: 'PortfolioController',
                controllerAs: 'vm'

            })
    })
})();
