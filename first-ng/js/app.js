(function() {
'use strict';

// all code will go in here...
angular.module('myApp', [])
  .controller('MainController', function(){
    var vm = this;
    vm.greeting = 'AngularJS, the Superheroic MVW Framework';
    vm.crazyColor = 'navajowhite';
    vm.names = ['Eenie', 'Meenie', 'Miney', 'Moe'];
    vm.extraNames = ['Dopey', 'Happy', 'Sleepy'];
    vm.showNames = false;
    vm.addName = function(){
      if (vm.extraNames.length) vm.names.push(vm.extraNames.shift())
    };
    vm.gemsOfImagination = [

      {
        name: 'yellow diamond',
        price: '5,000/ct',
        description: `like dis 💎 but 💛`,
        canPurchase: true,
        soldOut: false
      },
      {
        name: 'blue diamond',
        price: '1,000/ct',
        description: `like dis 💎 but NOTHING.`,
        canPurchase: false,
        soldOut: false
      },
      {
        name: 'champagne diamond',
        price: '800/ct',
        description: `like dis 💎 but 💩`,
        canPurchase: true,
        soldOut: true
      },
      {
        name: 'pink diamond',
        price: '4,000/ct',
        description: `like dis 💎 but 💖`,
        canPurchase: false,
        soldOut: true
      },
    ]

  })



})();
