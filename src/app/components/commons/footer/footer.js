(function(angular) {

  angular.module('app').component('componentFooter', {
    templateUrl: 'app/components/commons/footer/footer-template.html',
    controller: ['$log', controladorFooter],
    controllerAs: 'compFooter'
  });

  function controladorFooter($log) {
   var vm = this;

  

   vm.$onInit = function() {    
     
     $log.log('footer');

   };

   vm.$onChanges = function() {
     
     };

    vm.$onDestroy = function() {
     
   };


  }

})(angular);