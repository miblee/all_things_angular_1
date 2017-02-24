// js/controllers/UpcomingController.js

angular.module("ControllerLab")
    .controller("DonorInfoController", DonorInfoController)

  function DonorInfoController () {
    var vm = this;
    vm.test = "Hello from DonorInfoController";
    vm.count = 3;
    vm.contact = {
      email: 'donorlove@THEmet.moop',
      phone: '(212) 650 - 2425'
    };
    vm.amounts = ['$50 😕', '$100 🙃', '$250 😎', '$500 😎👍', '$1,000 😻', '$5,000 🙀']
}
