(function () {
    'use strict';

    angular
        .module('app')
        .controller('CreateLocationController', CreateLocationController);

    CreateLocationController.$inject = ['$location', '$http', 'FlashService'];
    function CreateLocationController($location, $http, FlashService) {   
        console.log("eseguo qualcosa!");
        $http.post(server.api+"/location")
        .success(function (response){
            if(response.success) {
                var newId = response.data.location._id;
                $location.replace(); //rimuove dalla history, previene creazioni multiple schiacciando indietro
                $location.path("/location/"+newId+"/modifica");
            }
            else {
                FlashService.Error("Error "+response.error.code+": "+response.error.message, true);
                $location.path("/");
            }
        })
        .error(function(data, status, headers, config)
        {
            FlashService.Error("Error 503: service unaviable, check network connection", true);
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
            $location.path("/");
        });
    };
})();
