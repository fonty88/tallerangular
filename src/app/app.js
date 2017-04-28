'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router', 'ngAnimate'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };
  
    var about = {
      name:'aboutUs',
      url: '/aboutUs',
      template: '<view-about></view-about>'
    };

    var add = {
      name:'addPlayer',
      url: '/addPlayer',
      template: '<view-add></view-add>'
    };   

    var game = {
      name:'game',
      url: '/game',
      template: ' <animals-list></animals-list>'
    };
  

    $stateProvider.state(main);   
    $stateProvider.state(about);
    $stateProvider.state(add);   
     $stateProvider.state(game);

    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');

    /* Quitamos el hash */
   // $locationProvider.html5Mode(true);
  }

})(angular);