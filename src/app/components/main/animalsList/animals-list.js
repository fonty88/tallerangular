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


   var name1;
   var name2;
     var contador=0;

    vm.goToGame = function(name) {
      
      console.log(name);
        
      name1=name;
     
    

      if(name1===name2 && contador!=0)
       { vm.allAnimals.splice (1, 2);
        contador=0;
  name1=null;
            name2=null;

       }
       else{
        name2=name;
          contador++;

          if (contador==2)
          { contador=0;
            name1=null;
            name2=null;
          }
       }

    };


    

   

  }

})(angular);
