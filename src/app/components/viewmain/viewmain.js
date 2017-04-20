(function(angular) {

  angular.module('app').component('view', {
    templateUrl: 'app/components/viewmain/view-main.html',
    controller: ['$log',  controladorView],
    controllerAs: 'compoView'
   
  });

  function controladorView($log) {
   var vm = this;

  

   vm.$onInit = function() {
     
   };

   vm.$onChanges = function() {
      
     };

    vm.$onDestroy = function() {
  
   };


  }

})(angular);

