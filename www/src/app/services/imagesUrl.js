(function () {
    'use strict';

    angular
        .module('app')
        .factory('imagesUrl', imagesUrl);

    imagesUrl.$inject = ['$http'];

    function imagesUrl($http) {

        return {
            home: [
                'images/home/bark_logo.jpg',
                'images/home/biodro_logo.jpg',
                'images/home/kolano_logo.jpg',
                'images/home/kregoslup_logo.jpg',
                'images/home/stopa_logo.jpg',
                'images/home/contact_logo.jpg',
                'images/home/implantsCardAddress_logo.png',
                'images/home/news_logo.png',

            ],
            bark: [
                'images/bark/arrow_logo.jpg',
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
            biodro: [
            'images/biodro/atlas_logo.png',
            'images/biodro/hipAndGo_logo.png',
            ],
            panewkaAtlante2: [
            'images/biodro/panewkaAtlante2/panewkaAtlante1.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante2.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante3.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante4.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante5.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante6.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante7.png',
            'images/biodro/panewkaAtlante2/panewkaAtlante8.png',
            ],
            panewkaAtlas: [

            ],
            panewkaHipNGo: [

            ],
            systemProtezyBipolarnejPharo: [

            ],
            trzpienESOP: [

            ],
//KOLANO

            kolano: [

            ]




        }

    }
})();