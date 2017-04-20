(function(angular) {

  angular.module('app').component('componentAnimals', {
    templateUrl: 'app/components/viewmain/listanimals/list-animals.html',
    controller: ['$log', controladorAnimals],
    controllerAs: 'compAnimals'
  });

  function controladorAnimals($log) {
   var vm = this;

  

   vm.$onInit = function() {    
     
     $log.log('animals');

   };

   vm.$onChanges = function() {
     
     };

    vm.$onDestroy = function() {
     
   };


  }

})(angular);

