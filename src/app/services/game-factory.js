(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('gameFactory', ['$q', '$http', gameFactory]);

  function gameFactory($q, $http) {
    var module = {};
    var self = module;

    module.allCards = [
       { "name": "Card1", "img":"cart.jpg", "imgn":"garu.jpg"},
      { "name": "Card2", "img":"cart.jpg", "imgn":"garud.jpg"},
      { "name": "Card3", "img":"cart.jpg", "imgn":"vee.jpg"},
      { "name": "Card4", "img":"cart.jpg", "imgn":"grow.jpg"},       

    ]; 

   module.user = {};
     // {"id": 0, "name": "", "email":"", "avatar":""},       


    module.getAllCards = function() {
      
        //No estoy seguro que sea una copia profunda, xk cuando cambio una propiedad se cambia en las dos
       self.allCards = self.allCards.concat(self.allCards.slice());

      for (let i = self.allCards.length; i; i--) {
        let j = Math.floor(Math.random() * i );
        [self.allCards[i - 1], self.allCards[j]] = [self.allCards[j], self.allCards[i - 1]];
    }



      return self.allCards; 
    }

    module.getUser = function() {
      return self.user; 
    }

        module.addUser = function(newUser) {  
          //newUser.id = 0;   
          self.user.name = newUser.name;
          self.user.email = newUser.email;
          self.user.img = newUser.img;        
       
    };

    return module;
  };

})(angular);


