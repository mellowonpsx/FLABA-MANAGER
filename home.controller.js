(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$http', 'FlashService'];
    function HomeController($rootScope, $http, FlashService) {
        var vm = this;
        vm.user = null;
        vm.locations = null;
        vm.removeLocation = removeLocation;
        vm.updateLocationClassification = updateLocationClassification;
        initController();
        
        function initController() {
            loadCurrentUser();
            loadLocations();
        }

        function loadCurrentUser() {
            vm.user = $rootScope.globals.currentUser;
        }
        
        function loadLocations() {
            vm.dataLoading = true;
            $http.get(server.api+"/locations")
            .success(function (response){
                if(response.success)
                {
                    vm.locations = response.data.locations;
                    vm.dataLoading = false;
                }
                else {
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    vm.dataLoading = false;
                }
            })
            .error(function(data, status, headers, config)
            {
                FlashService.Error("Error 503: service unaviable, check network connection");
                vm.dataLoading = false;
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
        
        function updateLocationClassification(codice, id) {
            vm.dataLoading = true;
            var classificationOption = {
                3: {codice: '3', nominale: 'eccellente'},
                2: {codice: '2', nominale: 'buona'},
                1: {codice: '1', nominale: 'scarsa'},
                0: {codice: '0', nominale: 'merda'}
            };
            //var elementoModificato = $.grep(vm.locations, function(e){ return e.id == id; })[0];
            var posizioneElemento= vm.locations.map(function(x) {return x.id; }).indexOf(id);
            vm.locations[posizioneElemento].classificazione = classificationOption[codice];
            var elementoModificato = vm.locations[posizioneElemento];
            $http.put(server.api+"/locations/"+id+"/", { updateValue: elementoModificato })
            .success(function (response){
                if(response.success)
                {
                    vm.locations = response.data.locations;
                    vm.dataLoading = false;
                }
                else
                {
                    //error, reload location from server!
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    loadLocations();
                    
                }
            })
            .error(function(data, status, headers, config)
            {
                //error, reload location from server!
                FlashService.Error("Error 503: service unaviable, check network connection");
                loadLocations();
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
        
    function addLocationClassification(nuovaLocation) {
            /*
            //var elementoModificato = $.grep(vm.locations, function(e){ return e.id == id; })[0];
            var posizioneElemento= vm.locations.map(function(x) {return x.id; }).indexOf(id);
            vm.locations[posizioneElemento].classificazione = classificationOption[codice];
            var elementoModificato = vm.locations[posizioneElemento];
            $http.put("http://localhost:3000/locations/"+id+"/", { updateValue: elementoModificato })
            .success(function (response){
                if(response.success)
                {
                    vm.locations = response.data.locations;
                    vm.dataLoading = false;
                }
                else
                {
                    //error, reload location from server!
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    loadLocations();
                    
                }
            })
            .error(function(data, status, headers, config)
            {
                //error, reload location from server!
                FlashService.Error("Error 503: service unaviable, check network connection");
                loadLocations();
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });*/
        }
        
        //vm.contactApi = contactApi;
        //vm.contactApiNoAuth = contactApiNoAuth;
        
        /*function contactApi() {
            //console.log("mando qualcosa: ")
            $http.post("http://localhost:3000/")
            .success(function (response){
                console.log(response);
                //console.log(response);
            })
            .error(function(data, status, headers, config)
            {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
        
        function contactApiNoAuth() {
            //console.log("mando qualcosa: ")
            $http.defaults.headers.common.authorization = 'Basic '; // jshint ignore:line
            $http.post("http://localhost:3000/")
            .success(function (response){
                console.log(response);
                //console.log(response);
            })
            .error(function(data, status, headers, config)
            {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }*/
        function removeLocation(id) {    
            
            var risposta = confirm("Hai scelto di eliminare la location numero "+id+".\nPremere ok per cancellare.\nAttenzione: azione irreversibile!");
            if (risposta != true) {
                return;
            }            
            vm.dataLoading = true;
            $http.delete(server.api+"/locations/"+id+"/")
            .success(function (response){
                if(response.success)
                {
                    vm.locations = response.data.locations;
                    vm.dataLoading = false;
                }
                else
                {
                    //error, reload location from server!
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    loadLocations();
                    
                }
            })
            .error(function(data, status, headers, config)
            {
                //error, reload location from server!
                FlashService.Error("Error 503: service unaviable, check network connection");
                loadLocations();
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
    }
})();


