(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($stateProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'js/components/coffee/coffee.view.html',
      controller: 'coffeeController',
      controllerAs: 'coffeeCtrl'
    }

    var sinlgeState = {
      name: 'single',
      url: '/:id',
      templateUrl: 'js/components/coffee/coffee.view.html',
      controller: 'coffeeController',
      controllerAs: 'coffeeCtrl'
    }

    $stateProvider.state(homeState)
    $stateProvider.state(sinlgeState)
  }

})();
