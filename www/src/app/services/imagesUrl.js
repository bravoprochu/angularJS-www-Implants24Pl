﻿(function() {
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

            telegraph: [
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

            panewkaAtlas: [
                "images/biodro/panewkaAtlas/panewka_atlas00_IIIP.png",
                "images/biodro/panewkaAtlas/panewkaAtlas01_IVP.png",
                "images/biodro/panewkaAtlas/panewkaAtlas02_MS.png",
                "images/biodro/panewkaAtlas/panewkaAtlas03_press_fit.png",
                "images/biodro/panewkaAtlas/panewkaAtlas04_stability_of_the_insertt.png",
                "images/biodro/panewkaAtlas/panewkaAtlas05_coating.png",
                "images/biodro/panewkaAtlas/panewkaAtlas06_prosthetic_comp.png",
                "images/biodro/panewkaAtlas/panewkaAtlas07_description.png",
                "images/biodro/panewkaAtlas/wkladyPanewkowe/wkladyPanewkowe08_flat_edge.png",
                "images/biodro/panewkaAtlas/wkladyPanewkowe/wkladyPanewkowe09_stability_of_the_insertt.png",
                "images/biodro/panewkaAtlas/wkladyPanewkowe/wkladyPanewkowe10_tabela.png",
                "images/biodro/panewkaAtlas/wkladyPanewkowe/wkladyPanewkowe10_tabela_big.png",
            ],
            panewkaHipNGo: [
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_00_press-fit.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_01_press-fit2.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_02_stability.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_03_insert.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_04_instrumentationt.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_05_references.png",
                "images/biodro/hipAndGo/pressFitBezcementowa/pressFitBezcementowa_06_references.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_07_dualMobility.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_08_rangeAndMaterials.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_09_stability.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_10_inserts.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_11_acetebular.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_12_references.png",
                "images/biodro/hipAndGo/cementowaDwumobilna/cementowaDwumobilna_13_otherImplants.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_14_dualMobility.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_15_press-fit.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_16_stability.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_17_insert.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_18_plugsAndMallebleLug.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_19_instruments.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_20_references.png",
                "images/biodro/hipAndGo/dwumobilnaTripod/dwumobilnaTripod_21_otherImplants.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_22_press-fit.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_23_press-fitOfTheMetal-back.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_24_metal-back.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_25_PeInsert.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_26_ceramicInsert.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_27_correspondence.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_28_ref.png",
                "images/biodro/hipAndGo/bezcementowaDwumobilna/bezcementowaDwumobilna_29_otherImplants.png",


            ],

            systemProtezyBipolarnejPharo: [

            ],
            trzpienESOP: [

            ],
            //KOLANO

            kolano: [


            ],

            kolanoFHK: [
                "images/kolano/fhk/technikiOperacyjne_00_sequence1.png",
                "images/kolano/fhk/technikiOperacyjne_01_sequence2.png",
                "images/kolano/fhk/technikiOperacyjne_02_sequence3.png",
                "images/kolano/fhk/technikiOperacyjne_03_sequence4.png",
                "images/kolano/fhk/technikiOperacyjne_04_sequence5.png",
                "images/kolano/fhk/technikiOperacyjne_05_preOperative.png",
                "images/kolano/fhk/technikiOperacyjne_06_prepOfTheTibia.png",
                "images/kolano/fhk/technikiOperacyjne_07_prepOfTheTibia2.png",
                "images/kolano/fhk/technikiOperacyjne_08_positioningOfTheTibia.png",
                "images/kolano/fhk/technikiOperacyjne_09_positioningOfTheTibia.png",
                "images/kolano/fhk/technikiOperacyjne_10_determinationOfTheLevelOfCut.png",
                "images/kolano/fhk/technikiOperacyjne_11_tibialCut.png",
                "images/kolano/fhk/technikiOperacyjne_12_validation.png",
                "images/kolano/fhk/technikiOperacyjne_13_prepOfTheFemur.png",
                "images/kolano/fhk/technikiOperacyjne_14_chpiceOfTheFemoralCut.png",
                "images/kolano/fhk/technikiOperacyjne_15_chpiceOfTheFemoralCut.png",
                "images/kolano/fhk/technikiOperacyjne_16_chpiceOfTheFemoralCut.png",
                "images/kolano/fhk/technikiOperacyjne_17_femoralAnteroposterior.png",
                "images/kolano/fhk/technikiOperacyjne_18_femoralAnteroposterior.png",
                "images/kolano/fhk/technikiOperacyjne_19_femoralAnteroposterior.png",
                "images/kolano/fhk/technikiOperacyjne_20_preparationOfTheTrochlea.png",
                "images/kolano/fhk/technikiOperacyjne_21_choiceOfFemoralCuts.png",
                "images/kolano/fhk/technikiOperacyjne_22_instalationOfTheGuide.png",
                "images/kolano/fhk/technikiOperacyjne_23_trials.png",
                "images/kolano/fhk/technikiOperacyjne_24_fixedBearing.png",
                "images/kolano/fhk/technikiOperacyjne_25_mobileBearing.png",
                "images/kolano/fhk/technikiOperacyjne_26_drillingOfPlugs.png",
                "images/kolano/fhk/technikiOperacyjne_27_drillingOfPlugs.png",
                "images/kolano/fhk/technikiOperacyjne_28_prepOfThePosterior.png",
                "images/kolano/fhk/technikiOperacyjne_29_prepOfTheTibial.png",
                "images/kolano/fhk/technikiOperacyjne_30_pattelarStep.png",
                "images/kolano/fhk/technikiOperacyjne_31_pattelarStep.png",
                "images/kolano/fhk/technikiOperacyjne_32_tribialComponentPS.png",
                "images/kolano/fhk/technikiOperacyjne_33_forAcR.png",
                "images/kolano/fhk/technikiOperacyjne_34_tibialComponentMB.png",
                "images/kolano/fhk/technikiOperacyjne_35_instrumentation.png",
                "images/kolano/fhk/technikiOperacyjne_36_instrumentation.png",
                "images/kolano/fhk/technikiOperacyjne_37_instrumentationContd.png",
                "images/kolano/fhk/technikiOperacyjne_38_instrumentationContd.png",
                "images/kolano/fhk/technikiOperacyjne_39_instrumentationContd2.png",
                "images/kolano/fhk/technikiOperacyjne_40_instrumentationsCompositions.png",
            ],
            kolanoTLS: [
                "images/kolano/tls/technikiOperacyjne_00_positioning.png",
                "images/kolano/tls/technikiOperacyjne_01_graftHarvesting.png",
                "images/kolano/tls/technikiOperacyjne_02_prepTheGraft.png",
                "images/kolano/tls/technikiOperacyjne_03_prepTheGraft1.png",
                "images/kolano/tls/technikiOperacyjne_04_prepTheGraft2.png",
                "images/kolano/tls/technikiOperacyjne_05_prepTheGraft3.png",
                "images/kolano/tls/technikiOperacyjne_06_preconditioningTheGraft.png",
                "images/kolano/tls/technikiOperacyjne_07_graftDiameter.png",
                "images/kolano/tls/technikiOperacyjne_08_OutsideInTibiaTargeting.png",
                "images/kolano/tls/technikiOperacyjne_09_ReamingTheTibia.png",
                "images/kolano/tls/technikiOperacyjne_10_TappingTheTibia.png",
                "images/kolano/tls/technikiOperacyjne_11_Retrograde.png",
                "images/kolano/tls/technikiOperacyjne_12_OutsideInFemurTargeting.png",
                "images/kolano/tls/technikiOperacyjne_13_ReamingTheFemur.png",
                "images/kolano/tls/technikiOperacyjne_14_tappingTheFemur.png",
                "images/kolano/tls/technikiOperacyjne_15_Retrograde.png",
                "images/kolano/tls/technikiOperacyjne_16_CleanThePosteriorWall.png",
                "images/kolano/tls/technikiOperacyjne_17_PassingTheThreads.png",
                "images/kolano/tls/technikiOperacyjne_18_PassingTheThreadsInTheFemur.png",
                "images/kolano/tls/technikiOperacyjne_19_impl.png",
                "images/kolano/tls/technikiOperacyjne_20_fixingTheFemur.png",
                "images/kolano/tls/technikiOperacyjne_21_fixingTheTibia.png",
                "images/kolano/tls/technikiOperacyjne_22_xRays.png",
                "images/kolano/tls/technikiOperacyjne_23_tlsTabs.png",
            ],


            kregoslup: [
                "images/kregoslup/kregoslup_cervicalProsthesis1.png",
                "images/kregoslup/kregoslup_cervicalProsthesis2.png",
                "images/kregoslup/kregoslup_cervicalProsthesis3.png",
                "images/kregoslup/kregoslup_cervicalProsthesis4.png",
                "images/kregoslup/kregoslup_lumbarProsthesis1.png",
                "images/kregoslup/kregoslup_lumbarProsthesis2.png",
                "images/kregoslup/kregoslup_lumbarProsthesis3.png",
                "images/kregoslup/kregoslup_lumbarProsthesis4.png",
                "images/kregoslup/kregoslup_lumbarProsthesis5.png",
                "images/kregoslup/kregoslup_esp1.png",

            ],

            stopa: [
                "images/stopa/calcanailLogo.png",
                "images/stopa/narzedziaDoMiniinwazyjnejChirurgiiStopyMISLOGO.png",
                "images/stopa/srubyLOGO.png",
                "images/stopa/srubyDoTylstopiaLOGO.png",
                "images/stopa/tenoligLOGO.png",
           




            ],
            stopaCalcanail: [
                "images/stopa/calcanail/technikaSkrocona_00_jakToDziala.png",
                "images/stopa/calcanail/technikaSkrocona_01_zalety.png",
                "images/stopa/calcanail/technikaSkrocona_02_gwozdzie.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_03_anatomopathologyOfPosterior.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_04_preoperativePlanning.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_05_surgicalIndications.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_06_patientPositioning.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_07_step1.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_08_step2.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_09_step3.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_10_step4.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_11_step5.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_12_step5.png",
                "images/stopa/calcanail/technikaOperacyjnaFracture_13_finall.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_14_step1.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_15_step2.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_16_step3.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_17_step4.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_18_step5.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_19_step6.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_20_final.png",
                "images/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis_21_set.png",
            ],
            stopaNarzedziaDoMiniinwazyjnejChirurgiiStopyMISCtrl: [
                "images/stopa/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS_22_completeSolution.png",
                "images/stopa/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS_23_instrumentation.png",
                "images/stopa/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS_24_set.png",
            ],
            stopaSrubyDoPrzedstopia:[
                "images/stopa/OsteotomiaWeilaLOGO.png",
                "images/stopa/srubyLOGO.png",
                "images/stopa/srubyDoPrzestopiaTechnikiOperacyjneLOGO.png",
            ],

            stopaSrubyDoPrzedstopiaOsteotomiaWeila:[
         
                "images/stopa/srubyDoPrzestopia/osteotomiaWeila_25_snapOff.png",
                "images/stopa/srubyDoPrzestopia/osteotomiaWeila_26_fixation.png",
            ],
            stopaSrubyDoPrzedstopiaSruby:[
                "images/stopa/srubyDoPrzestopia/srubyDoPrzedstopia_27_set.png",
                "images/stopa/srubyDoPrzestopia/srubyDoPrzedstopia_28_range1.png",
                "images/stopa/srubyDoPrzestopia/srubyDoPrzedstopia_29_range2.png",
                "images/stopa/srubyDoPrzestopia/srubyKaniulowane_30_powerDriven.png",
                "images/stopa/srubyDoPrzestopia/srubyKaniulowane_31_3aSrew.png",
            ],
            stopaSrubyDoPrzedstopiaTechnikiOperacyjne:[
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne_32_postoperative.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne_33_2.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne_34_3.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne_35_4.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_4_.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_5_exosto.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_6_exosto.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_7_exosto.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_8_associatedActs.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/chevron_9_postopCare.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/clinicalSituations_10_1.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/clinicalSituations_11_2.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/clinicalSituations_12_3.png",
                    "images/stopa/srubyDoPrzestopia/technikiOperacyjne/clinicalSituations_13_4.png",
                    
            ],

            stopaSrubyDoTylstopiaSrubyDoTylstopia: [
               
            ],


            stopaTenoligTenolig: [
                
            ]


        }

    }
})();