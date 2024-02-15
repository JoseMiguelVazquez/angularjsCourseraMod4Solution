(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    // // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');
  
    // // Set up UI states
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/main-categories.template.html',
      controller: 'MainCategoriesController as mainCategories',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{itemId}',
      templateUrl: 'src/menuapp/templates/main-items.template.html',
      controller: 'MainItemsController as mainItems',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    })
  }


})();
