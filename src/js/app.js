// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.coffee',
      'myApp.services'
    ])
    .filter('search', () => (arr, str) => arr.filter(coffee => !str.length || coffee.name.indexOf(str) > -1))

})();
