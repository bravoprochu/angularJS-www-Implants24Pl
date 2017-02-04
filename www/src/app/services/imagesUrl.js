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
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision6.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus3.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus6.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationofthehumerus7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid6.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid5.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid6.png',

            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid7.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/prepGlenoid8.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/metalBlackGlenoid.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/arrowAnatOptional.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/closure1.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/closure2.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/closure3.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/closure4.png',
            'images/bark/arrow/protezaBarkuAnatomiczna/closure5.png'
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
            'images/bark/arrow/protezaBarkuOdwrocona/ar_arrowClosure3.png'
            ],
            resurfacingCap: [
                'images/bark/arrow/resurfacingCap/resurfacingCap01_arrowInstrumentation.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap02_shapes.jpg',
                'images/bark/arrow/resurfacingCap/resurfacingCap03_patientSetUp.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap04_patientSetUp.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap05_deltopectoral-groove-vertically.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap06_retractors.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap07_subscapularis.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap08_more_lateral_than_the_deltopectoral.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap09_coracoacromial_ligament.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap10_external_rotation.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap11_two_directional_guide_rods.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap12_rod.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap13_inserting_the_pin.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap14_first_reaming.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap15_subseqent_reaming_for_size_correction.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap16_trial_prosthesis.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap17_pin_preparation.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap18_fitting_the_definitive_implant.png',
                'images/bark/arrow/resurfacingCap/resurfacingCap19_implants.png'

            ],

            telegraph:[
            "images/bark/telegraph/telegraph00_positionning_of_the_patient.png",
            "images/bark/telegraph/telegraph01_point_of_entry.png",
            "images/bark/telegraph/telegraph02_lenghtt_of_nail.png",
            "images/bark/telegraph/telegraph03_proximal_locking.png",
            "images/bark/telegraph/telegraph04_distal_screwing.png",
            "images/bark/telegraph/telegraph05_the_percutaneous_technique.png",
            "images/bark/telegraph/telegraph06_the_standard_technique.png",
            "images/bark/telegraph/telegraph07_the_standard_technique.png",
            "images/bark/telegraph/telegraph08_the_cup-and-ball_technique.png",
            "images/bark/telegraph/telegraph09_installation_of_the_nail_and_proximal.png",
            "images/bark/telegraph/telegraph10_remark.png",
            "images/bark/telegraph/telegraph11_removing_the_material.png",
            "images/bark/telegraph/telegraph12_instrumentation.png",
            "images/bark/telegraph/telegraph13_instrumentation.png",


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