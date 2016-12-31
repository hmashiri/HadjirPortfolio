(function() {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = [];

    /* @ngInject */
    function PortfolioController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();