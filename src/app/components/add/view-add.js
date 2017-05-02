(function(angular) {

  angular.module('app').component('viewAdd', {
    templateUrl:  'app/components/add/view-add-template.html',
    controller: ['$state','gameFactory', viewAdd],
    controllerAs: 'viewAdd'
  });

  function viewAdd($state, gameFactory) {
    var vm = this;

    vm.$onInit = function() { 
      vm.showMsg = false;
      vm.formIsSend = false;     
    };

    vm.addUser = function() {
       var newUser = {
         name: vm.userName, 
         email: vm.userEmail,
         img: vm.userImg
        };
        //console.log(newUser);

        vm.formIsSend = true;    

        if ( !newUser.name || !newUser.email || !newUser.img ) {
          vm.showMsg = true;
        } else {
           vm.showMsg = false;
        }

      if ( !vm.showMsg ) {
        gameFactory.addUser(newUser);       
        $state.go('game');
  
      }
    }
  }

})(angular);