(function () {
    'use strict';

    angular
        .module('app')
        .controller('protezaBarkuAnatomicznaCtrl', protezaBarkuAnatomicznaCtrl);

    protezaBarkuAnatomicznaCtrl.$inject = ['$state', 'commonFunctions', 'imagePreload'];

    function protezaBarkuAnatomicznaCtrl($state, cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'protezaBarkuAnatomiczna';
        vm.isScreenSmall = cF.isScreenSmall();
        vm.getImageUrl = function (idx) { return vm.images[idx]; };
        vm.settings= cF.settings;
        vm.menuShow = menuShow;
        

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.menu = cF.menuPrepare(vm.title);
        vm.moveNext = moveNext;
        vm.movePrev = movePrev;


        function moveNext() {
            cF.slideToState(vm.menu);

        }

        function movePrev() {
            cF.slideToState(vm.menu, false);
        }


        vm.base = 'images/arrow/anatomiczna/'
        vm.images = [
            'arrow_positioningThePatient.png',
            'ara_deltopectoralIncision1.png',
            'ara_deltopectoralIncision2.png',
            'ara_deltopectoralIncision3.png',
            'ara_deltopectoralIncision5.png',
            'ara_deltopectoralIncision6.png',
            'ara_deltopectoralIncision7.png',
            'ara_preparationofthehumerus1.png',
            'ara_preparationofthehumerus2.png',
            'ara_preparationofthehumerus3.png',

            'ara_preparationofthehumerus4.png',
            'ara_preparationofthehumerus5.png',
            'ara_preparationofthehumerus6.png',
            'ara_preparationofthehumerus7.png',
            'ara_preparationOfTheGlenoid1.png',
            'ara_preparationOfTheGlenoid2.png',
            'ara_preparationOfTheGlenoid3.png',
            'ara_preparationOfTheGlenoid4.png',
            'ara_preparationOfTheGlenoid5.png',
            'ara_preparationOfTheGlenoid6.png',

            'ara_definitiveImplants1.png',
            'ara_definitiveImplants2.png',
            'ara_definitiveImplants3.png',
            'ara_definitiveImplants4.png',
            'ara_definitiveImplants5.png',
            'ara_prepGlenoid2.png',
            'ara_prepGlenoid3.png',
            'ara_prepGlenoid4.png',
            'ara_prepGlenoid5.png',
            'ara_prepGlenoid6.png',

            'ara_prepGlenoid7.png',
            'ara_prepGlenoid8.png',
            'ara_metalBlackGlenoid.png',
            'ara_arrowAnatOptional.png',
            'ara_closure1.png',
            'ara_closure2.png',
            'ara_closure3.png',
            'ara_closure4.png',
            'ara_closure5.png',
        ];

        angular.forEach(vm.images, function (img) {
            img = vm.base + img;
        });

        vm.images = cF.imageLinkUpdate(vm.images, vm.base);

        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.laoderInfo = "";
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.loaderInfo = notify;
        });






        vm.humeralStem = [
            { c1: "reference", c2: "diameter", c3: "height" },
            { c1: "260 516", c2: "Ø 08", c3: "120" },
            { c1: "257 320", c2: "Ø 08", c3: "170" },
            { c1: "260 517", c2: "Ø 10", c3: "125" },
            { c1: "260 519", c2: "Ø 12", c3: "130" },
            { c1: "260 521", c2: "Ø 14", c3: "135" },
        ];
        vm.centredHumeralHead = [
            { c1: "reference", c2: "diameter", c3: "height" },
            { c1: "260 537", c2: "Ø 40", c3: "15" },
            { c1: "260 538", c2: "Ø 40", c3: "17" },
            { c1: "260 539", c2: "Ø 44", c3: "16" },
            { c1: "260 540", c2: "Ø 44", c3: "18" },
            { c1: "260 541", c2: "Ø 46", c3: "16" },
            { c1: "260 542", c2: "Ø 46", c3: "18" },
            { c1: "260 543", c2: "Ø 46", c3: "21" },
            { c1: "260 544", c2: "Ø 48", c3: "16" },
            { c1: "260 545", c2: "Ø 48", c3: "18" },
            { c1: "260 546", c2: "Ø 48", c3: "21" },
            { c1: "260 547", c2: "Ø 50", c3: "17" },
            { c1: "260 548", c2: "Ø 50", c3: "19" },
            { c1: "260 549", c2: "Ø 50", c3: "21" },
            { c1: "260 550", c2: "Ø 54", c3: "19" },
            { c1: "260 551", c2: "Ø 54", c3: "21" },
        ];

        vm.offCentredHumeralHead = [
            { c1: "reference", c2: "diameter", c3: "height" },
            { c1: "260 526", c2: "Ø 44", c3: "16" },
            { c1: "260 527", c2: "Ø 44", c3: "18" },
            { c1: "260 528", c2: "Ø 46", c3: "16" },
            { c1: "260 529", c2: "Ø 46", c3: "18" },
            { c1: "260 530", c2: "Ø 46", c3: "21" },
            { c1: "260 531", c2: "Ø 48", c3: "16" },
            { c1: "260 532", c2: "Ø 48", c3: "18" },
            { c1: "260 533", c2: "Ø 48", c3: "21" },
            { c1: "260 534", c2: "Ø 50", c3: "17" },
            { c1: "260 535", c2: "Ø 50", c3: "19" },
            { c1: "260 536", c2: "Ø 50", c3: "21" },
        ];

        vm.cancellousBoneScrew = [
            { c1: "reference", c2: "diameter", c3: "length" },
            { c1: "260 576", c2: "Ø 5.5", c3: "32" },
            { c1: "260 577", c2: "Ø 5.5", c3: "36" },
            { c1: "260 578", c2: "Ø 5.5", c3: "40" },
            { c1: "260 584", c2: "Ø 5.5", c3: "45" },
            { c1: "260 585", c2: "Ø 5.5", c3: "50" },
        ];

        vm.corticalBoneScrew = [
            { c1: "reference", c2: "diameter", c3: "height" },
            { c1: "260 595", c2: "Ø 4.5", c3: "32" },
            { c1: "260 596", c2: "Ø 4.5", c3: "34" },
            { c1: "260 597", c2: "Ø 4.5", c3: "36" },
            { c1: "260 598", c2: "Ø 4.5", c3: "38" },
            { c1: "260 599", c2: "Ø 4.5", c3: "40" },
        ];


        vm.cementedGlenoid = [
            { c1: "reference", c2: "size" },
            { c1: "260 522", c2: "44" },
            { c1: "260 523", c2: "46" },
            { c1: "260 524", c2: "48" },
            { c1: "260 525", c2: "50" },
        ];
        vm.glenoidInsert = [
            { c1: "reference", c2: "size" },
            { c1: "260 556", c2: "44" },
            { c1: "260 557", c2: "46" },
            { c1: "260 558", c2: "48" },
            { c1: "260 559", c2: "50" },
        ];
        vm.metalBackGlenoidBase = [
            { c1: "reference", c2: "size" },
            { c1: "260 552", c2: "44" },
            { c1: "260 553", c2: "46" },
            { c1: "260 554", c2: "48" },
            { c1: "260 555", c2: "50" },
        ];
      
    }
})();
