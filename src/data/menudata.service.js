(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    var APIBASEURL = 'https://coursera-jhu-default-rtdb.firebaseio.com'

    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var menuService = this;

        menuService.getAllCategories = function () {
            var allCategories = [];

            return $http({
                method: 'GET',
                url: (APIBASEURL + '/categories.json')
            })
            .then(function (res) {
                allCategories = res.data;
                return allCategories;
            })
        }

        menuService.getItemsForCategory = function (categoryShortName) {
            var ITEMSURL = (APIBASEURL + '/menu_items/' + categoryShortName + '.json');
            var allItems = []

            return $http({
                method: 'GET',
                url: ITEMSURL
            })
            .then(function (res) {
                allItems = res.data;
                return allItems;
            })
        }
    }
    
    
})();