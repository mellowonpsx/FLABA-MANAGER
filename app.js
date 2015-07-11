(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode({enabled: true, requireBase: false});
        //$locationProvider.html5Mode({enabled: true});
        $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'login.view.html',
            controllerAs: 'vm'
        })
        .when('/location/:id/modifica', {
            controller: 'EditLocationController',
            templateUrl: 'location.view.html',
            controllerAs: 'vm'
        })
        /*.when('/deleteLocation/:id', {
            controller: 'DeleteController',
            templateUrl: 'delete.view.html',
            controllerAs: 'vm'
        })*/
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'home.view.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();