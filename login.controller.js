(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location', '$rootScope', 'AuthenticationService', 'FlashService'];
    function LoginController($location, $rootScope, AuthenticationService, FlashService) {
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
 
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password, response).then(function (){
                        //vm.dataLoading = false;
                        $location.path('/');
                        $rootScope.$apply();
                    });
                } else {
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
 
})();

