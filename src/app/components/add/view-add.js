(function(angular) {

  angular.module('app').component('viewAdd', {
    templateUrl:  'app/components/add/view-add-template.html',
    controller: ['animalsFactory', viewAdd],
    controllerAs: 'viewAdd'
  });

  function viewAdd(animalsFactory) {
    var vm = this;

    vm.$onInit = function() {      
    };

    vm.addAnimal = function() {
       var newAnimal = {
         name: vm.animalname, 
         img: vm.animalimg,
        type: vm.combo
       }

      animalsFactory.addAnimal(newAnimal);
    }
  }

})(angular);