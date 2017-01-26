(function () {
    'use strict';


    angular.module('app', [
        'ngLocale',
        'ngMaterial',
        'ui.router',
        'ngMessages',
        'ngAnimate',
        'ngSanitize',
        'toastr',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster',
        'com.2fdevs.videogular.plugins.buffering',
        'ngYoutubeEmbed',
        'duScroll',
        'ya.pdf'



    ]).run(appRun);

    appRun.$inject = ['$rootScope','$window', 'dataFactory'];

    function appRun($rootScope, $window, dF) {
        moment.locale('PL');
        dF.getData();
        $rootScope.$on('$stateChangeSuccess', function () {
            $window.scrollTo(0, 0);
        })
    }
})();