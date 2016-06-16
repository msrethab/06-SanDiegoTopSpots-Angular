
// Creating Main Controller under myApp module

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'MainFactory'];

    /* @ngInject */
    function MainController($http, MainFactory) {
        var vm = this;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {

            MainFactory.getTopSpot()
				.then(function(response) {

                vm.topspots = response;

            })

        }
    }
})();
