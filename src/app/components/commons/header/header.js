(function(angular) {

  angular.module('app').component('componentHeader', {
    templateUrl: 'app/components/commons/header/header-template.html',
    controller: ['$log', controladorHeader],
    controllerAs: 'compHeader'
  });

  function controladorHeader($log) {
   var vm = this;

  

   vm.$onInit = function() {    
     
     $log.log('header');

   };

   vm.$onChanges = function() {
     
     };

    vm.$onDestroy = function() {
     
   };


  }

})(angular);

