
// Creating Main Factory to contain top spots related services

(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTopSpots: getTopSpots,
            addTopSpot: addTopSpot,
            deleteTopSpot: deleteTopSpot
        };
        return service;

        ////////////////

        //Defining functions to Get, add and delete top spots

        function getTopSpots() {
            return $http({
                method: 'GET',
                url: '../topspots.json'
            }).then(function(response){

                return response.data;

            });

        }

        function addTopSpot(topSpots, topSpotName, topSpotDesc, topSpotLat, topSpotLong){

            var topSpotLocation = [topSpotLat, topSpotLong];
            var topSpot = {name: topSpotName, description: topSpotDesc, location: topSpotLocation};
            return topSpots.push(topSpot);

        }

        function deleteTopSpot(topSpots, index){

            return topSpots.splice(index, 1);

        }
    }
})();

//Reviewed by: JK and MS