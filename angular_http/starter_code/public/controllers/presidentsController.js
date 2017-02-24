(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;
    // vm.all = [
    //   {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
    //   {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
    //   {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
    //   {"name": "Mike", "start": 1949, "end": 1947 }
    // ];
    vm.addPresident = addPresident;
    vm.deletePresident = deletePresident;
    vm.uncoverPresident = uncoverPresident;
    vm.newPresident = {};
    vm.all = [];

    getPresidents();

    function getPresidents(){
      $http
      .get('/api/presidents')
      .then(function(response){
        vm.all = response.data.presidents;
      }, function(err) {
          console.log(err);
      });
    }

    function addPresident(){
      $http
        .post('/api/presidents', vm.newPresident)
        .then(function(res) {
          vm.all.push(res.data.president);
          vm.newPresident = {};
        }, function(err) {
          console.log(err);
        });
    }

    function deletePresident(prez){
      var id = prez._id;
      let url = "api/presidents/".concat(id);
      $http
        .delete(url)
        .then(function(res) {
          getPresidents()
        }, function(err) {
          console.log(err);
        });
    }


    function uncoverPresident(prez){
      let url = "api/presidents/".concat(prez._id);
      let uncover = {uncovered: !prez.uncovered};
      $http
        .put(url, uncover)
        .then(function(res){
          getPresidents()
        }, function(err) {
          console.log(err);
        })
    }

    }


})();
