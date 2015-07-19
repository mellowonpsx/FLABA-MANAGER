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
        
        loadClassificationOption();
        
        function loadClassificationOption() {
            $http.get(server.api+"/valori-qualita-acque")
            .success(function (response){
                if(response.success)
                {
                    vm.classificationOption = response.data.qualita_acque;
                }
                else
                {
                    FlashService.Error("Error "+response.error.code+": "+response.error.message, true);
                }
            })
            .error(function(data, status, headers, config)
            {
                FlashService.Error("Error 503: service unaviable, check network connection", true);
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
        
        function updateLocationClassification(codiceClassificazione, _id) {
            vm.dataLoading = true;
            var qualita_acque = vm.classificationOption; //JSON.parse('[{"qualita_acque":{"nome_campo":{"default":"IT","IT":"qualità delle acque","EN":"water quality","DE":"-"},"stelle":{"nome_campo":{"default":"IT","IT":"stelle","EN":"stars","DE":"-"},"valore":3},"classificazione":{"nome_campo":{"default":"IT","IT":"classificazione","EN":"classification","DE":"-"},"valore":{"default":"IT","IT":"eccellente","EN":"excellent","DE":"-"}}}},{"qualita_acque":{"nome_campo":{"default":"IT","IT":"qualità delle acque","EN":"water quality","DE":"-"},"stelle":{"nome_campo":{"default":"IT","IT":"stelle","EN":"stars","DE":"-"},"valore":2},"classificazione":{"nome_campo":{"default":"IT","IT":"classificazione","EN":"classification","DE":"-"},"valore":{"default":"IT","IT":"buona","EN":"good","DE":"-"}}}},{"qualita_acque":{"nome_campo":{"default":"IT","IT":"qualità delle acque","EN":"water quality","DE":"-"},"stelle":{"nome_campo":{"default":"IT","IT":"stelle","EN":"stars","DE":"-"},"valore":1},"classificazione":{"nome_campo":{"default":"IT","IT":"classificazione","EN":"classification","DE":"-"},"valore":{"default":"IT","IT":"sufficiente","EN":"sufficient","DE":"-"}}}},{"qualita_acque":{"nome_campo":{"default":"IT","IT":"qualità delle acque","EN":"water quality","DE":"-"},"stelle":{"nome_campo":{"default":"IT","IT":"stelle","EN":"stars","DE":"-"},"valore":0},"classificazione":{"nome_campo":{"default":"IT","IT":"classificazione","EN":"classification","DE":"-"},"valore":{"default":"IT","IT":"scarsa","EN":"poor","DE":"-"}}}}]');
            var posizioneElemento= vm.locations.map(function(x) {return x._id; }).indexOf(_id);
            var posizioneClassificazione= qualita_acque.map(function(x){ return x.qualita_acque.stelle.valore}).indexOf(parseInt(codiceClassificazione));
            var vecchiaClassificazione = vm.locations[posizioneElemento].qualita_acque;
            var nuovaClassificazione= qualita_acque[posizioneClassificazione].qualita_acque;
            vm.locations[posizioneElemento].qualita_acque = nuovaClassificazione;
            var elementoModificato = vm.locations[posizioneElemento];
            delete elementoModificato.editing;
            $http.put(server.api+"/location/"+_id, { updateValue: elementoModificato })
            .success(function (response){
                if(response.success)
                {
                    //vm.locations = response.data.locations;
                    vm.dataLoading = false;
                }
                else
                {
                    //error, reload location from server!
                    elementoModificato.classificazione = vecchiaClassificazione;
                    FlashService.Error("Error "+response.error.code+": "+response.error.message);
                    loadLocations();
                }
            })
            .error(function(data, status, headers, config)
            {
                //error, reload location from server!
                elementoModificato.classificazione = vecchiaClassificazione;
                FlashService.Error("Error 503: service unaviable, check network connection");
                loadLocations();
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
           
        }
        
        function removeLocation(_id) {    
            var posizioneElemento= vm.locations.map(function(x) {return x._id; }).indexOf(_id);
            var id = vm.locations[posizioneElemento].id.valore;
            var risposta = confirm("Hai scelto di eliminare la location numero "+id+".\nPremere ok per cancellare.\nAttenzione: azione irreversibile!");
            if (risposta != true) {
                return;
            }            
            vm.dataLoading = true;
            $http.delete(server.api+"/location/"+_id)
            .success(function (response){
                if(response.success)
                {
                    delete vm.locations[posizioneElemento];
                    //loadLocations();
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


