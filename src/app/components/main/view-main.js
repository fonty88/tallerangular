(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main-template.html',
    controller: ['$state', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state) {
    var vm = this;

    vm.$onInit = function() {
     
    };   

    vm.goToAdd = function() {
      $state.go('addPlayer');
      window.location.reload();   // si te sales(hader o footer), al volver a entrar empieces de nuevo
    };

  
  }

 

})(angular);