// js/controllers/HomeController.js

angular.module("IntroAngular")
    .controller("HomeController", HomeController)

  function HomeController () {
    this.test = "Hello World"
    var vm = this;
    vm.count = 7
}
