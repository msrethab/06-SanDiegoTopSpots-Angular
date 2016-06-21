
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

        //Defining activation function to get top spots from JSON on load

        function activate() {

            MainFactory.getTopSpots()
				.then(function(response) {

                vm.topspots = response;

            })

        }

        //Calling custom factory functions to add and delete top spots

        function addTopSpot(topSpotName, topSpotDesc, topSpotLat, topSpotLong){
        	MainFactory.addTopSpot(vm.topspots, topSpotName, topSpotDesc, topSpotLat, topSpotLong);
        }

        function deleteTopSpot($index){
            MainFactory.deleteTopSpot(vm.topspots, $index);

        }
    }
})();

//Reviewed by: JK and MS