(function() {
    'use strict';

    angular
        .module('myPortfolio')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['PortfolioController'];

    /* @ngInject */
    function PortfolioController(PortfolioController) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();