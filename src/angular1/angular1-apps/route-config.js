(function () {
  angular.module('angular1', ['ui.router']).config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$locationProvider'];

  function routeConfig($stateProvider, $locationProvider) {

    $stateProvider
      .state('login', {
        templateUrl: '/angular1/avt1-apps/login/login.html',
        url: '/login',
      })
      .state('home', {
        templateUrl: '/angular1/avt1-apps/home/home.html',
        url: '/home',
      })

    $locationProvider.html5Mode(true);

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
})();
