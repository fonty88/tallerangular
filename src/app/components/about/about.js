(function(angular) {

  angular.module('app').component('viewEdit', {
    templateUrl:  'app/components/about/about-template.html',
    controller: ['animalsFactory', viewEdit],
    controllerAs: 'viewEdit'
  });

  function viewEdit(animalsFactory) {
    var vm = this;

  }

})(angular);