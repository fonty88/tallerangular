(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['$state', 'gameFactory', animalsList],
    controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, gameFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = gameFactory.getAllCards();  
       
       vm.user = gameFactory.getUser();   
      console.log( vm.user);
      console.log(vm.allAnimals);
    };

    

   

  }

})(angular);
