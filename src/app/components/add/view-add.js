(function(angular) {

  angular.module('app').component('viewAdd', {
    templateUrl:  'app/components/add/view-add-template.html',
    controller: ['$state','animalsFactory', viewAdd],
    controllerAs: 'viewAdd'
  });

  function viewAdd($state, animalsFactory) {
    var vm = this;

    vm.$onInit = function() { 
      vm.showMsg = false;
      vm.formIsSend = false;     
    };

    vm.addAnimal = function() {
       var newAnimal = {
         name: vm.animalName, 
         img: vm.animalImg,
         type: vm.animalType
        };
        console.log(newAnimal);

        vm.formIsSend = true;    

        if ( !newAnimal.name || !newAnimal.img || !newAnimal.type ) {
          vm.showMsg = true;
        } else {
           vm.showMsg = false;
        }

      if ( !vm.showMsg ) {
        animalsFactory.addUser(newAnimal);       
        $state.go('game');
  
      }
    }
  }

})(angular);