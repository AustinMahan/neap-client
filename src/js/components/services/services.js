(() => {
  angular
    .module('myApp.services', [])
    .service('services', services)

    services.$inject = ['$http']

    function services($http) {
      this.getAll = function functionName() {
        return $http.get('https://shrouded-sea-63114.herokuapp.com/coffee')
      }

      this.getOne = function (id) {
        return $http.get('https://shrouded-sea-63114.herokuapp.com/coffee/' + id)
      }

      this.add = function (form) {
        var data = {
          name: form.name,
          decaf: form.decaf || false,
          caffeine: form.caffeine,
          roast: form.roast,
          roaster: form.roaster,
          origin: form.origin,
          quantity: form.quantity,
          price: form.price,
        }

        return $http.post('https://shrouded-sea-63114.herokuapp.com/coffee', data, {
          headers : {
              'Content-Type' : 'application/json'
            }
        })
      }
    }
})();
