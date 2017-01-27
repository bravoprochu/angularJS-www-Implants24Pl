(function () {
    'use strict';

    angular
        .module('app')
        .factory('imagesUrl', imagesUrl);

    imagesUrl.$inject = ['$http'];

    function imagesUrl($http) {

        return {
            bark: [
                'images/bark/arrow_logo.png',
                'images/bark/telegraph_logo.png'
            ],
            arrow: [
                'images/bark/arrow/proteza-barku-anatomiczna-1.jpg',
                'images/bark/arrow/proteza-barku-odwrocona-1.jpg',
                'images/bark/arrow/arrow_to_resurfacing_eng-1.jpg',
            ],
            protezaBarkuAnatomiczna: [
            'images/bark/arrow/protezaBarkuAnatomiczna/arrow_positioningThePatient.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision6.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_deltopectoralIncision7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus3.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus6.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationofthehumerus7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_preparationOfTheGlenoid6.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/ara_definitiveImplants1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_definitiveImplants2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_definitiveImplants3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_definitiveImplants4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_definitiveImplants5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid6.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_prepGlenoid8.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_metalBlackGlenoid.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_arrowAnatOptional.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_closure1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_closure2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_closure3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_closure4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/ara_closure5.png',
            ],
            protezaBarkuOdwrocona: [
            'images/bark/arrow/protezaBarkuOdwrocona/arrow_positioningThePatient.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_superiorLateralIncision1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_superiorLateralIncision2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_humeralPreparation1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_humeralPreparation2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_humeralPreparation3.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_humeralPreparation4.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid3.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid4.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid5.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid6.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid7.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prepGlenoid8.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_metalBlackGlenoid.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prosthesisTrials1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prosthesisTrials2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_prosthesisTrials3.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_definitiveImplants1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_definitiveImplants2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_definitiveImplants3.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_definitiveImplants4.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_definitiveImplants5.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_arrowOptional.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_arrowClosure1.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_arrowClosure2.png',
            'images/bark/arrow/protezaBarkuOdwrocona/ar_arrowClosure3.png',
            ],
            resurfacingCap: [

            ],




        }

    }
})();