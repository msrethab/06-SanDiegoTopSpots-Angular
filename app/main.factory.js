
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
            getTopSpot: getTopSpot
        };
        return service;

        ////////////////

        function getTopSpot() {
            return $http({
                method: 'GET',
                url: '../topspots.json'
            }).then(function(response){

                return response.data;

            });

        }
    }
})();


    
