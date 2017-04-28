(function(angular) {

  angular.module('app').component('headerGame', {
    templateUrl:  'app/components/commons/header/header-game-template.html',
    controller: ['$state', headerGame],
    controllerAs: 'headerGame'
  });

  function headerGame($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);