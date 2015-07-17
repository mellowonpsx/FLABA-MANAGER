(function () {
    'use strict';

    angular
        .module('app')
        .directive('resolveLoader', function($rootScope, $timeout) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'loading.view.html',
                link: function(scope, element) {
                    $rootScope.$on('$routeChangeStart', function(event, currentRoute, previousRoute) {
                    if (previousRoute) return;
                    $timeout(function() {
                        element.removeClass('ng-hide');
                    });
                });

                $rootScope.$on('$routeChangeSuccess', function() {
                    element.addClass('ng-hide');
                });
            }
        };
    });
});

