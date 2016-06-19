
// Creating Main Controller under myApp module

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'MainFactory', '$scope'];

    /* @ngInject */
    function MainController($http, MainFactory, $scope) {
        var vm = this;
        vm.title = 'MainController';
        vm.addTopSpot = addTopSpot;
        vm.deleteTopSpot = deleteTopSpot;

        activate();

        ////////////////

        function activate() {

            MainFactory.getTopSpots()
				.then(function(response) {

                vm.topspots = response;

            })

        }

        function addTopSpot(topSpotName, topSpotDesc, topSpotLat, topSpotLong){
        	MainFactory.addTopSpot(vm.topspots, topSpotName, topSpotDesc, topSpotLat, topSpotLong);
        }

        function deleteTopSpot($index){
            MainFactory.deleteTopSpot(vm.topspots, $index);

        }
    }
})();
