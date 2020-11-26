(function () {
    'use strict';

    angular
        .module('app')
        .factory('slajdy', slajdy);

    slajdy.$inject = ['$interval'];

    function slajdy($interval) {
        var interval;
        var intervalms = 4000;
        var selectedIdx = 0;
        var tabsLength = 3;


        return  {
            //interval: interval,
            //intervalms: intervalms,
            tabSelectedIndex: tabSelectedIndex,
            resumeInterval: resumeInterval,
            stopInterval: stopInterval,
            //tabsLength: 2
        }

        function isPlaying() {
            return angular.isDefined(interval)
        }

        function tabSelectedIndex() {
            return selectedIdx;
        }

        function stopInterval () {
            $interval.cancel(interval);
            interval = undefined;
        }

        function resumeInterval() {
            return;
            if (isPlaying()) return;

            interval = $interval(function () {
                if (selectedIdx + 1 <= tabsLength - 1) {
                    selectedIdx = selectedIdx + 1;
                } else {
                    selectedIdx = 0;
                }
            }, intervalms);
        }


    }
})();