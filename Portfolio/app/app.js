(function() {
    'use strict';


    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise("/home");

        $stateProvider
        	.state("home", {
        		url:"/home",
        		templateUrl: "app/partials/home.html",
        		controller: "PortfolioController",
        		controllerAs: "vm"
        	})
            .state("aboutme", {
                url: "/aboutme",
                templateUrl: "app/partials/aboutme.html",
                controller: "PortfolioController",
                controllerAs: "vm"
            })
            .state("projects", {
                url: "/projects",
              	templateUrl: "app/partials/projects.html",
                controller: "PortfolioController",
                controllerAs: "vm"

            })
            .state("contact", {
            	url: "/contact",
            	templateUrl:"app/partials/contact.html",
            	controller: "PortfolioController",
            	controllerAs: "vm"
            })
    })
})();
