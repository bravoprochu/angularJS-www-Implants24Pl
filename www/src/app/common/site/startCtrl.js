(function () {
    'use strict';

    angular
        .module('app')
        .controller('startCtrl', startCtrl);

    startCtrl.$inject = ['$location']; 

    function startCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'start';



    }
})();
