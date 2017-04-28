(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('animalsFactory', ['$q', '$http', animalsFactory]);

  function animalsFactory($q, $http) {
    var module = {};
    var self = module;

    module.allAnimals = [
      {"id": 0, "name": "Gat1", "img":"cards.jpg"},
      {"id": 1, "name": "Gat2", "img":"cards.jpg"},
      {"id": 2, "name": "Gat3", "img":"cards.jpg"},
      {"id": 3, "name": "Gat4", "img":"cards.jpg"},    

    ]; 

   module.user = {};
     // {"id": 0, "name": "", "email":"", "avatar":""},    
      
    


    module.getAllAnimals = function() {
      
      
      for (let i = self.allAnimals.length; i; i--) {
        let j = Math.floor(Math.random() * i );
        [self.allAnimals[i - 1], self.allAnimals[j]] = [self.allAnimals[j], self.allAnimals[i - 1]];
    }
      return self.allAnimals; 
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


  /* Al principio allAnimals es false 
   module.allAnimals = false; */

   
   /* module.getAllAnimals = function() {
     // Si ya tenemos allAnimals, si no es false, devolvemos una promesa con esos datos; en caso contrario, los cargamos x ajax y luego los devolvemos

     // Declaramos la promesa 
      var defered = $q.defer();
      var promise = defered.promise;

      //  Si ya tenemos los animales, los devolvemos 
      if ( self.allAnimals ) {
        defered.resolve(self.allAnimals);
      } else {
       // Si no, los cargamos con get y devolvemos el data del response
        $http.get('http://localhost:8080/app/mocks/animals.json').then(function(response) {
          // Seteamos allAnimals para que la próxima vez no sea necesaria la llamada aja
          self.allAnimals = response.data;
          defered.resolve(response.data);
        });
      }

      // Devolvemos la promesa
      return promise;
  }; */

    module.getAnimalById = function(_id_) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !id && id!=0 ) {
        return false;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          return self.allAnimals[len];
        }
      }
    };

    module.addAnimal = function(newAnimal) {
      newAnimal.id = self.allAnimals.length;
      self.allAnimals.push(newAnimal);
    };

    module.updateAnimal = function(_id_, animatToEdit) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !animatToEdit ) {
        return;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          self.allAnimals[len].name = animatToEdit.name;
          self.allAnimals[len].img  = animatToEdit.img;
          self.allAnimals[len].type = animatToEdit.type;
        }
      }  

    };

    return module;
  };

})(angular);


