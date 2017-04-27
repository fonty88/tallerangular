(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['$state', '$stateParams', 'animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, $stateParams, animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = animalsFactory.getAllAnimals();    
       
var name = $stateParams.name;

   // var index = $stateParams.name;

     
    };

    

   

  }

})(angular);
