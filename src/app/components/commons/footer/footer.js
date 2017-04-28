(function(angular) {

  angular.module('app').component('footerGame', {
    templateUrl:  'app/components/commons/footer/footer-game-template.html',
    controller: ['$state', footerGame],
    controllerAs: 'footerGame'
  });

  function footerGame($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('aboutUs');
    };
  }

})(angular);