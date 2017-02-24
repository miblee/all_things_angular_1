// js/controllers/CarController.js

angular.module("IntroAngular")
    .controller("CarController", CarController)

    function CarController(){
      var vm = this;

      vm.test = "Goodbye, World";
      vm.car = {
        make: 'Honda',
        model: 'Accord'
      }

      vm.carCollection = [
        {
          make: 'Toyota',
          model: 'Prius'
        },
        {
          make: 'Lexus',
          model: 'Hybrid'
        },
        {
          make: 'Thunderbird',
          model: 'Thundercat'
        }
      ]
    }

