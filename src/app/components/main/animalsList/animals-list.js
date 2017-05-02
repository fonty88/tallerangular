(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['$state', 'gameFactory', animalsList],
    controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, gameFactory) {
    var vm = this;

    vm.$onInit = function() {
      
      vm.allAnimals = gameFactory.getAllCards();        
       vm.user = gameFactory.getUser(); 
       vm.showMsg = false;  
       vm.counte=0;
       vm.counta=0;
      
      //console.log( vm.user);
      //console.log(vm.allAnimals);

    };


   var name1="";
   var name2="";
   var contador=0;
    //var counta=0;
     //var counte=0;


    vm.goToGame = function(name) {
      
      //Toda la logica es dmasiado compleja(demasiados opeadores), seguro que hay formas mucho mas simples


      //console.log(name);

   

   //vm.allAnimals[0].img=vm.allAnimals[0].imgn;
   //La idea es sustituir la propidas img por imgn para mostrar la carta, pero me he bloqueado
   //  el nombre de la carta en el juego dsaparece, pero para pruebas lo mantengo. 
//  y hay un fallo, si doy dos veces en la misma, se borran las dos.
//creo que tendria que haber pasado el index y organizarlo todo en torno a él.
//Esta semana con calma a ver si soy capaz de sacarlo todo.

      name1 = name;     
        

      if(name2 == name )
       { 


         vm.counta++;
         //console.log(counta);
          for(var i=0; i<vm.allAnimals.length; i++)
          {
            

             if (vm.allAnimals[0].name == name)
            {
              vm.allAnimals.splice (0, 1);           
              
            }
            //Si no pongo l if de arriba:
        //Y si la primera carta y la segunda coinciden solo se borra una y falla.
          if (vm.allAnimals[i].name == name)
            {
              vm.allAnimals.splice (i, 1);
              i=0;// >Reseto xk si van seguidas no me borraba las dos.
              
            }

              if(vm.allAnimals.length == 0)
            {
               // vm.allAnimals.splice (0, 1);
                vm.showMsg = true;
            } 
        }
                 
        contador=0;
        name1="";
        name2="";

       }
       else
       {
          name2=name;
          contador++;

          if (contador==2)
          { contador=0;
            name1="";
            name2="";
            vm.counte++;

           
             //console.log(counte);
          }
       }

    };  

  

   vm.goToNew = function() {
     window.location.reload();
     //Lo hago asi, xk no he sido capaz de rendrizar un componente y 
     //perdia los datos del usuario si .go('game')

    //vm.animals-card.reload();
      $state.go('addPlayer');
          
    };
}
})(angular);

