(function(angular) {

  angular.module('app').component('planetsComponent', {
    templateUrl: 'app/components/viewmain/listanimals/animal-template.html',
    controller: planets
  });

  function planets() {
    var vm = this;
    
    vm.$onInit = function() {
      vm.mainTitle = 'Planets';

      vm.solarSystem = [
        {id: 0, name: 'Elefante'},
        {id: 1, name: 'Leon'},
        {id: 2, name: 'Cocodrilo'},
        {id: 3, name: 'Aguila'}
       
      ];
    }
  }

})(angular);

