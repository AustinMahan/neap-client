(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'services', '$stateParams'];

  function coffeeController($scope, services, $stateParams) {
    /*jshint validthis: true */
    var vm = this
    vm.greeting = 'Hello World!';
    vm.coffees = []
    vm.sortBy = 'price'
    vm.search = ''
    if ($stateParams.id) {
      services.getOne($stateParams.id)
        .then(data => vm.coffees = data.data)
    } else {
      services.getAll()
        .then(data => {
          vm.options = Object.keys(data.data[0])
          vm.coffees = data.data
        })
    }
    vm.form = false
    vm.toggleForm = function () {
      vm.form = !vm.form
    }

    vm.add = function (thing) {
      services.add(thing)
      .then(data => data.status == 201 ? vm.coffees.push(data.data[0]) : console.log('bad'))
      .then(() => vm.form = false)
    }
  }

})();
