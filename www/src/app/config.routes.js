(function() {
    'use strict';

    var app = angular.module('app')
        .config(appRoutes);


    appRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

                     $locationProvider.html5Mode(true);
        //             $urlRouterProvider.deferIntercept();

        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/home');
        //                console.log($stateProvider);

        $stateProvider

        .state('main', {
        abstract: true,
        templateUrl: 'app/common/site/start.html',
        controller: 'startCtrl',
        controllerAs: 'vm'
        })


        .state('home', {
            data: {
                caption: 'Strona startowa'
            },
            parent: 'main',
            url: "/home",
            templateUrl: "app/content/home/home.html",
            controller: 'homeCtrl',
            controllerAs: 'vm',
        })

        .state('contact', {
            data: {
                caption: 'Kontakt'
            },
            parent: 'main',
            url: "/contact",
            templateUrl: "app/content/contact/contact.html",
            controller: 'homeCtrl',
            controllerAs: 'vm',
        })

        .state('prodBase', {
                parent: 'main',
                abstract: true,
                templateUrl: 'app/content/prodBase/prodBase.html',
                controller: 'prodBaseCtrl',
                controllerAs: 'vm'
            })
            .state('bark', {
                parent: 'prodBase',
                data: {
                    caption: 'Bark'
                },
                url: "/bark",
                templateUrl: "app/content/prodBase/bark/bark.html",
                controller: 'barkCtrl',
                controllerAs: 'vm',
            })
            .state('arrow', {
                parent: 'bark',
                data: {
                    caption: 'Arrow'
                },
                url: "/arrow",
                templateUrl: "app/content/prodBase/bark/arrow/arrow.html",
                controller: 'arrowCtrl',
                controllerAs: 'vm',
            })

        .state('protezaBarkuAnatomiczna', {
            parent: 'arrow',
            data: {
                caption: 'Proteza barku anatomiczna - Arrow anatomical (eng)'
            },
            url: "/protezaBarkuAnatomiczna",
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'protezaBarkuAnatomicznaCtrl',
            controllerAs: 'vm',
        })


        .state('protezaBarkuAnatomicznaTradeReferences', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Trade references'
                },
                url: "/tradeReferences",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/tradeReferences.html",
            })
            .state('protezaBarkuAnatomicznaPositioningThePatient', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Positioning the patient'
                },
                url: "/positioningThePatient",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/positioningThePatient.html",
            })
            .state('protezaBarkuAnatomicznaDeltopectoralIncision', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Deltopectoral incision'
                },
                url: "/deltopectoralIncision",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/deltopectoralIncision.html",
            })
            .state('protezaBarkuAnatomicznaPreparationOfTheHumerus', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Preparation of the humerus'
                },
                url: "/preparationOfTheHumerus",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheHumerus.html",
            })
            .state('protezaBarkuAnatomicznaPreparationOfTheGlenoid', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Preparation of the glenoid'
                },
                url: "/preparationOfTheGlenoid",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/preparationOfTheGlenoid.html",
            })
            .state('protezaBarkuAnatomicznaTestsOnTheProsthesis', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Tests on the prosthesis'
                },
                url: "/testsOnTheProsthesis",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/testsOnTheProsthesis.html",
            })
            .state('protezaBarkuAnatomicznaDefinitiveImplants', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Definitive implants'
                },
                url: "/definitiveImplants",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/definitiveImplants.html",
            })
            .state('protezaBarkuAnatomicznaArrowAnatOptional', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Optional'
                },
                url: "/arrowAnatOptional",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/arrowAnatOptional.html",
            })
            .state('protezaBarkuAnatomicznaClosure', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Closure'
                },
                url: "/closure",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/arrowAnatClosure.html",
            })
            .state('protezaBarkuAnatomicznaFilm1', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Zabieg operacyjny (video)'
                },
                url: "/zabiegOperacyjny",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/zabiegOperacyjny.html",
            })
            .state('protezaBarkuAnatomicznaDrPhilippeValenti', {
                parent: 'protezaBarkuAnatomiczna',
                data: {
                    caption: 'Zabieg operacyjny dr Philippe Valenti (video)'
                },
                url: "/zabiegOperacyjnyDrPhilippeValenti",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuAnatomiczna/zabiegOperacyjnyDrPhilippeValenti.html",
            })



        .state('protezaBarkuOdwrocona', {
                parent: 'arrow',
                data: {
                    caption: 'Proteza barku odwrocona - Arrow reverse (eng)'
                },
                url: "/protezaBarkuOdwrocona",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'protezaBarkuOdwroconaCtrl',
                controllerAs: 'vm',
            })
            .state('protezaBarkuOdwroconaTradeReferences', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Trade references'
                },
                url: "/tradeReferences",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/tradeReferences.html",
            })
            .state('protezaBarkuOdwroconaPositioningThePatient', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Positioning the patient'
                },
                url: "/positioningThePatient",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/positioningThePatient.html",
            })
            .state('protezaBarkuOdwroconaSuperiorLateralIncision', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Superior lateral incision'
                },
                url: "/superiorLateralIncision",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/superiorLateralIncision.html",
            })
            .state('protezaBarkuOdwroconaHumeralPreparation', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Humeral preparation'
                },
                url: "/humeralPreparation",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/humeralPreparation.html",
            })
            .state('protezaBarkuOdwroconaPreparationOfTheGlenoid', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Preparation of the glenoid'
                },
                url: "/preparationOfTheGlenoid",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/preparationOfTheGlenoid.html",
            })
            .state('protezaBarkuOdwroconaMetalBackGlenoidBase', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Metal back glenoid base'
                },
                url: "/metalBackGlenoidBase",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/metalBackGlenoidBase.html",
            })
            .state('protezaBarkuOdwroconaProsthesisTrials', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Prosthesis trials'
                },
                url: "/prosthesisTrials",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/prosthesisTrials.html",
            })
            .state('protezaBarkuOdwroconaDefinitiveImplants', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Definitive implants'
                },
                url: "/definitiveImplants",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/definitiveImplants.html",
            })
            .state('protezaBarkuOdwroconaArrowOptional', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Optional'
                },
                url: "/arrowOptional",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/arrowOptional.html",
            })
            .state('protezaBarkuOdwroconaArrowClosure', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Closure'
                },
                url: "/arrowClosure",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/arrowClosure.html",
            })
            .state('protezaBarkuOdwroconaFilm1', {
                parent: 'protezaBarkuOdwrocona',
                data: {
                    caption: 'Zabieg operacyjny (video)'
                },
                url: "/zabiegOperacyjny",
                templateUrl: "app/content/prodBase/bark/arrow/protezaBarkuOdwrocona/zabiegOperacyjny.html",
            })




        .state('resurfacingCap', {
                parent: 'arrow',
                data: {
                    caption: 'Resurfacing Cap'
                },
                url: "/resurfacingCap",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'resurfacingCapCtrl',
                controllerAs: 'vm',
            })
            .state('choiceOfSizeOfImplant', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Choice of size of implant'
                },
                url: "/choiceOfSizeOfImplant",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/choiceOfSizeOfImplant.html",
            })
            .state('deltopectoralApproach', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Deltopectoral approach'
                },
                url: "/deltopectoralApproach",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/deltopectoralApproach.html",
            })
            .state('mackenzieAnteriosuperiorApproach', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Mackenzie anteriosuperior approach'
                },
                url: "/mackenzieAnteriosuperiorApproach",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/mackenzieAnteriosuperiorApproach.html",
            })
            .state('insertingThePin', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Inserting the pin'
                },
                url: "/insertingThePin",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/insertingThePin.html",
            })
            .state('reamingTheHeadOfTheHumerus', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Reaming the head of the humerus'
                },
                url: "/reamingTheHeadOfTheHumerus",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/reamingTheHeadOfTheHumerus.html",
            })
            .state('trialProsthesis', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Trial prosthesis'
                },
                url: "/trialProsthesis",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/trialProsthesis.html",
            })
            .state('pinPreparation', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Pin preparation'
                },
                url: "/pinPreparation",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/pinPreparation.html",
            })
            .state('fittingTheDefinitiveImplant', {
                parent: 'resurfacingCap',
                data: {
                    caption: 'Fitting the definitive implant'
                },
                url: "/fittingTheDefinitiveImplant",
                templateUrl: "app/content/prodBase/bark/arrow/resurfacingCap/fittingTheDefinitiveImplant.html",
            })



        .state('telegraph', {
                parent: 'bark',
                data: {
                    caption: 'Telegraph'
                },
                url: "/telegraph",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'telegraphCtrl',
                controllerAs: 'vm',
            })
            .state('telegraphCommonRules', {
                parent: 'telegraph',
                data: {
                    caption: 'Common rules'
                },
                url: "/commonRules",
                templateUrl: "app/content/prodBase/bark/telegraph/commonRules.html",
            })
            .state('telegraphTechniques', {
                parent: 'telegraph',
                data: {
                    caption: 'Techniques'
                },
                url: "/techniques",
                templateUrl: "app/content/prodBase/bark/telegraph/techniques.html",
            })
            .state('telegraphShortTelegraphNail', {
                parent: 'telegraph',
                data: {
                    caption: 'Short Telegraph nail'
                },
                url: "/shortTelegraphNail",
                templateUrl: "app/content/prodBase/bark/telegraph/shortTelegraphNail.html",
            })
            .state('telegraphLongTelegraphNail', {
                parent: 'telegraph',
                data: {
                    caption: 'Long Telegraph nail'
                },
                url: "/longTelegraphNail",
                templateUrl: "app/content/prodBase/bark/telegraph/longTelegraphNail.html",
            })
            .state('telegraphRemovingTheMaterial', {
                parent: 'telegraph',
                data: {
                    caption: 'Removing the material'
                },
                url: "/removingTheMaterial",
                templateUrl: "app/content/prodBase/bark/telegraph/removingTheMaterial.html",
            })
            .state('telegraphInstrumentation', {
                parent: 'telegraph',
                data: {
                    caption: 'Instrumentation'
                },
                url: "/instrumentation",
                templateUrl: "app/content/prodBase/bark/telegraph/instrumentation.html",
            })

        .state('biodro', {
            parent: 'prodBase',
            data: {
                caption: 'Biodro'
            },
            url: "/biodro",
            templateUrl: "app/content/prodBase/biodro/biodro.html",
            controller: 'biodroCtrl',
            controllerAs: 'vm',
        })

        .state('panewkaAtlas', {
                parent: 'biodro',
                data: {
                    caption: 'Panewka Atlas'
                },
                url: "/panewkaAtlas",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'panewkaAtlasCtrl',
                controllerAs: 'vm',
            })
            .state('panewkaAtlasMetalBack', {
                parent: 'panewkaAtlas',
                data: {
                    caption: 'Metal Back'
                },
                url: "/metalBack",
                templateUrl: "app/content/prodBase/biodro/panewkaAtlas/metalBack.html",
            })
            .state('panewkaAtlasWkladyPanewkowe', {
                parent: 'panewkaAtlas',
                data: {
                    caption: 'Wklady panewkowe'
                },
                url: "/wkladyPanewkowe",
                templateUrl: "app/content/prodBase/biodro/panewkaAtlas/wkladyPanewkowe.html",
            })






        .state('panewkaHipNGo', {
            parent: 'biodro',
            data: {
                caption: 'Panewka Hip & Go'
            },
            url: "/panewkaHipNGo",
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'panewkaHipNGoCtrl',
            controllerAs: 'vm',
        })

            .state('panewkaHipNGoCementowaDwumobilna', {
                parent: 'panewkaHipNGo',
                data: {
                    caption: 'Cementowa dwumobilna'
                },
                url: "/cementowaDwumobilna",
                templateUrl: "app/content/prodBase/biodro/panewkaHipNGo/cementowaDwumobilna.html",
            })
            .state('panewkaHipNGoBezcementowaDwumobilna', {
                parent: 'panewkaHipNGo',
                data: {
                    caption: 'Bezcementowa dwumobilna'
                },
                url: "/bezcementowaDwumobilna",
                templateUrl: "app/content/prodBase/biodro/panewkaHipNGo/bezcementowaDwumobilna.html",
            })
            .state('panewkaHipNGoPressFitBezcementowa', {
                parent: 'panewkaHipNGo',
                data: {
                    caption: 'Pres-fit bezcementowa'
                },
                url: "/pressFitBezcementowa",
                templateUrl: "app/content/prodBase/biodro/panewkaHipNGo/pressFitBezcementowa.html",
            })
            .state('panewkaHipNGoDwumobilnaTripod', {
                parent: 'panewkaHipNGo',
                data: {
                    caption: 'Dwumobilna Tripod'
                },
                url: "/dwumobilnaTripod",
                templateUrl: "app/content/prodBase/biodro/panewkaHipNGo/dwumobilnaTripod.html",
            })





        .state('systemProtezyBipolarnejPharo', {
            parent: 'biodro',
            data: {
                caption: 'System protezy bipolarnej Pharo'
            },
            url: "/systemProtezyBipolarnejPharo",
//            templateUrl: 'app/common/inProgress.html',
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'systemProtezyBipolarnejPharoCtrl',
            controllerAs: 'vm',
        })
            .state('cementedAndCementlessBipolarFemoralImplants', {
                parent: 'systemProtezyBipolarnejPharo',
                data: {
                    caption: 'Cemented and cementless bipolar femoral implants'
                },
                url: "/cementedAndCementlessBipolarFemoralImplants",
                templateUrl: "app/content/prodBase/biodro/systemProtezyBipolarnejPharo/cementedAndCementlessBipolarFemoralImplants.html",
            })
            .state('pharoBipolarHead', {
                parent: 'systemProtezyBipolarnejPharo',
                data: {
                    caption: 'Pharo bipolar head'
                },
                url: "/pharoBipolarHead",
                templateUrl: "app/content/prodBase/biodro/systemProtezyBipolarnejPharo/pharoBipolarHead.html",
            })





        .state('trzpienESOP', {
            parent: 'biodro',
            data: {
                caption: 'Trzpie� ESOP'
            },
            url: "/trzpienESOP",
            templateUrl: 'app/common/inProgress.html',
            //templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'trzpienESOPCtrl',
            controllerAs: 'vm',
        })



        .state('kolano', {
                parent: 'prodBase',
                data: {
                    caption: 'Kolano'
                },
                url: "/kolano",
                templateUrl: "app/content/prodBase/kolano/kolano.html",
                controller: 'kolanoCtrl',
                controllerAs: 'vm',
            })
            .state('kolanoFHK', {
                parent: 'kolano',
                data: {
                    caption: 'FHK'
                },
                url: "/FHK",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'kolanoFHKCtrl',
                controllerAs: 'vm',
            })
                .state('kolanoFHKTechnikiOperacyjne', {
                    parent: 'kolanoFHK',
                    data: {
                        caption: 'Techniki operacyjne'
                    },
                    url: "/technikiOperacyjne",
                    templateUrl: "app/content/prodBase/kolano/fhk/technikiOperacyjne.html",
                })

            .state('kolanoTLS', {
                parent: 'kolano',
                data: {
                    caption: 'TLS'
                },
                url: "/TLS",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'kolanoTLSCtrl',
                controllerAs: 'vm',
            })
                .state('kolanoTLSTechnikiOperacyjne', {
                    parent: 'kolanoTLS',
                    data: {
                        caption: 'Techniki operacyjne'
                    },
                    url: "/technikiOperacyjne",
                    templateUrl: "app/content/prodBase/kolano/tls/technikiOperacyjne.html",
                })

        .state('kregoslup', {
            parent: 'prodBase',
            data: {
                caption: 'kregoslup'
            },
            url: "/kregoslup",
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'kregoslupCtrl',
            controllerAs: 'vm',
        })
                       .state('kregoslupOrigin', {
                           parent: 'kregoslup',
                           data: {
                               caption: 'Origin of the development'
                           },
                           url: "/origin",
                           templateUrl: "app/content/prodBase/kregoslup/origin.html",
                       })
                       .state('kregoslupLumbarProsthesis', {
                           parent: 'kregoslup',
                           data: {
                               caption: 'Lumbar prosthesis'
                           },
                           url: "/lumbarProsthesis",
                           templateUrl: "app/content/prodBase/kregoslup/lumbarProsthesis.html",
                       })
                       .state('kregoslupCervicalProsthesis', {
                           parent: 'kregoslup',
                           data: {
                               caption: 'Cervical prosthesis'
                           },
                           url: "/cervicalProsthesis",
                           templateUrl: "app/content/prodBase/kregoslup/cervicalProsthesis.html",
                       })






        .state('stopa', {
            parent: 'prodBase',
            data: {
                caption: 'Stopa'
            },
            url: "/stopa",
            templateUrl: "app/content/prodBase/stopa/stopa.html",
            controller: 'stopaCtrl',
            controllerAs: 'vm',
        })
            .state('stopaCalcanail', {
                parent: 'stopa',
                data: {
                    caption: 'Calcanail'
                },
                url: "/calcanail",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'stopaCalcanailCtrl',
                controllerAs: 'vm',
            })
                       .state('stopaCalcanailTechnikaSkrocona', {
                           parent: 'stopaCalcanail',
                           data: {
                               caption: 'Technika skrócona'
                           },
                           url: "/technikaOperacyjna",
                           templateUrl: "app/content/prodBase/stopa/calcanail/technikaSkrocona.html",
                       })
                       .state('stopaCalcanailTechnikaOperacyjnaFracture', {
                           parent: 'stopaCalcanail',
                           data: {
                               caption: 'Technika operacyjna fracture'
                           },
                           url: "/technikaOperacyjnaFracture",
                           templateUrl: "app/content/prodBase/stopa/calcanail/technikaOperacyjnaFracture.html",
                       })
                       .state('stopaCalcanailTechnikaOperacyjnaSubtalarArthrodesis', {
                           parent: 'stopaCalcanail',
                           data: {
                               caption: 'Technika operacyjna subtalar arthrodesis'
                           },
                           url: "/technikaOperacyjnaSubtalarArthrodesis",
                           templateUrl: "app/content/prodBase/stopa/calcanail/technikaOperacyjnaSubtalarArthrodesis.html",
                       })
            .state('stopaNarzedziaDoMiniinwazyjnejChirurgiiStopyMIS', {
                parent: 'stopa',
                data: {
                    caption: 'Narzedzia do miniinwazyjnej chirurgii stopy MIS'
                },
                url: "/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'stopaNarzedziaDoMiniinwazyjnejChirurgiiStopyMISCtrl',
                controllerAs: 'vm',
            })
                       .state('narzedziaDoMiniinwazyjnejChirurgiiStopyMIS', {
                           parent: 'stopaNarzedziaDoMiniinwazyjnejChirurgiiStopyMIS',
                           data: {
                               caption: 'Technika operacyjna subtalar arthrodesis'
                           },
                           url: "/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS",
                           templateUrl: "app/content/prodBase/stopa/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS/narzedziaDoMiniinwazyjnejChirurgiiStopyMIS.html",
                       })

            .state('stopaSrubyDoPrzedstopia', {
                parent: 'stopa',
                data: {
                    caption: 'Śruby do przedstopia'
                },
                url: "/srubyDoPrzedstopia",
                templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/stopaSrubyDoPrzedstopia.html",
                controller: 'stopaSrubyDoPrzedstopiaCtrl',
                controllerAs: 'vm',
            })
                       .state('stopaSrubyDoPrzedstopiaSruby', {
                           parent: 'stopaSrubyDoPrzedstopia',
                           data: {
                               caption: 'Śruby'
                           },
                           url: "/sruby",
                           templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                           controller: 'stopaSrubyDoPrzedstopiaSrubyCtrl',
                           controllerAs: 'vm',
                       })
                                .state('stopaSrubyDoPrzedstopiaSrubyDoPrzedstopia', {
                                    parent: 'stopaSrubyDoPrzedstopiaSruby',
                                    data: {
                                        caption: 'Śruby do przedstopia'
                                    },
                                    url: "/srubyDoPrzedstopia",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/sruby/srubyDoPrzedstopia.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaSrubyKaniulowane', {
                                    parent: 'stopaSrubyDoPrzedstopiaSruby',
                                    data: {
                                        caption: 'Śruby kaniulowane'
                                    },
                                    url: "/srubyDoPrzedstopiaSrubyKaniulowane",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/sruby/srubyKaniulowane.html",
                                })
                    .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjne', {
                        parent: 'stopaSrubyDoPrzedstopia',
                        data: {
                            caption: 'Techniki operacyjne'
                        },
                        url: "/technikiOperacyjne",
                        templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                        controller: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjneCtrl',
                        controllerAs: 'vm',
                    })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneArthrodesisOfThe1StMetatarsophalangealJoint', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Arthrodesis of the 1st metatarsophalangeal joint'
                                    },
                                    url: "/arthrodesisOfThe1StMetatarsophalangealJoint",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/arthrodesisOfThe1StMetatarsophalangealJoint.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneChevronOsteotomy', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Chevron osteotomy'
                                    },
                                    url: "/chevronOsteotomy",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/chevronOsteotomy.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneClinicalSituations', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Clinical situations'
                                    },
                                    url: "/clinicalSituations",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/clinicalSituations.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneMinimallyInvasiveSurgery', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Minimally invasive surgery'
                                    },
                                    url: "/minimallyInvasiveSurgery",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/minimallyInvasiveSurgery.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjnePhalangealOsteotomy', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Phalangeal osteotomy'
                                    },
                                    url: "/phalangealOsteotomy",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/phalangealOsteotomy.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneScarfOsteotomy', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Scarf osteotomy'
                                    },
                                    url: "/scarfOsteotomy",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/scarfOsteotomy.html",
                                })
                                .state('stopaSrubyDoPrzedstopiaTechnikiOperacyjneSurgicalPlaning', {
                                    parent: 'stopaSrubyDoPrzedstopiaTechnikiOperacyjne',
                                    data: {
                                        caption: 'Surgical planing'
                                    },
                                    url: "/surgicalPlaning",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/technikiOperacyjne/surgicalPlaning.html",
                                })
                    .state('stopaSrubyDoPrzedstopiaOsteotomiaWeila', {
                        parent: 'stopaSrubyDoPrzedstopia',
                        data: {
                            caption: 'Osteotomia Weila'
                        },
                        url: "/osteotomiaWeila",
                        templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                        controller: 'stopaSrubyDoPrzedstopiaOsteotomiaWeilaCtrl',
                        controllerAs: 'vm',
                    })
                                .state('stopaSrubyDoPrzedstopiastopaOsteotomiaWeila', {
                                    parent: 'stopaSrubyDoPrzedstopiaOsteotomiaWeila',
                                    data: {
                                        caption: 'Arthrodesis of the 1st metatarsophalangeal joint'
                                    },
                                    url: "/osteotomiaWeila",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoPrzedstopia/osteotomiaWeila/osteotomiaWeila.html",
                                })


            .state('stopaSrubyDoTylstopia', {
                parent: 'stopa',
                data: {
                    caption: 'Śruby do tyłstopia'
                },
                url: "/srubyDoTylstopia",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'stopaSrubyDoTylstopiaCtrl',
                controllerAs: 'vm',
            })
                                .state('stopaSrubyDoTylstopiaSrubyDoTylstopia', {
                                    parent: 'stopaSrubyDoTylstopia',
                                    data: {
                                        caption: 'Śruby do tyłstopia'
                                    },
                                    url: "/srubyDoTylstopia",
                                    templateUrl: "app/content/prodBase/stopa/srubyDoTylstopia/srubyDoTylstopia.html",
                                })


            .state('stopaTenolig', {
                parent: 'stopa',
                data: {
                    caption: 'Tenolig'
                },
                url: "/Tenolig",
                templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
                controller: 'stopaTenoligCtrl',
                controllerAs: 'vm',
            })
                                .state('stopaTenoligTenolig', {
                                    parent: 'stopaTenolig',
                                    data: {
                                        caption: 'Tenolig'
                                    },
                                    url: "/tenolig",
                                    templateUrl: "app/content/prodBase/stopa/tenolig/tenolig.html",
                                })

    };
})();