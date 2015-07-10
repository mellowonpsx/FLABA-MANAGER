(function () {
    'use strict';
 
    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);
 
    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout'];
    function AuthenticationService($http, $cookieStore, $rootScope, $timeout) {
        var service = {};
 
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
 
        return service;
 
        function Login(username, password, callback) {
            
            $http.post(server.api+"/login/", { username: username, password: password })
                .success(function (response){
                    callback(response);
                })
                .error(function(data, status, headers, config)
                {
                    console.log(config)
                    var response = { success: false, error:{code: '503', message: 'service unaviable, check network connection'} };
                    callback(response)
                });
        }
 
        function SetCredentials(username, password, response) {
            
            return hash(username + ':' + password).then(function(digest) {
                //console.log(digest);
                var authdata = digest;
                
                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        authdata: authdata,
                        level: response.data.level,
                        id: response.data.id
                    }
                };
                
                //console.log($rootScope.globals.currentUser);
 
                //$http.defaults.auth.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $http.defaults.headers.common['authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $cookieStore.put('globals', $rootScope.globals);
            });
        }
 
        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            //$http.defaults['auth'] = 'Basic ';
            $http.defaults.headers.common.authorization = 'Basic '; // jshint ignore:line
            //$http.defaults.headers.common.Authorization = 'Basic ';
        }
    }
    
    function hash(str) {
        // We transform the string into an arraybuffer.
        var buffer = new TextEncoder("utf-8").encode(str);
        return crypto.subtle.digest("SHA-512", buffer).then(function (hash)
        {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(hash)));
        });
    }
 
})();