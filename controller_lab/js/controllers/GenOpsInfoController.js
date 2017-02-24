// js/controllers/UpcomingController.js

angular.module("ControllerLab")
    .controller("GenOpsInfoController", GenOpsInfoController)

  function GenOpsInfoController () {
    var vm = this;
    vm.test = "Hello from GenOpsInfoController";
    vm.count = 1;

    vm.hours =
      {
        Monday: '10am-6pm',
        Tuesday: '10am-6pm',
        Wednesday: '10am-6pm',
        Thursday: '10am-6pm',
        Friday: '10am-9pm',
        Saturday: '10am-9pm',
        Sunday: '10am-9pm'
      }
    vm.admission = {
      Adults: 25,
      Seniors: 17,
      Students: 12
    }
}
