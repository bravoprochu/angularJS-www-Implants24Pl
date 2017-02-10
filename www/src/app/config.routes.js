(function() {
    'use strict';

    var app = angular.module('app')
        .config(appRoutes);


    appRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

        //            $locationProvider.html5Mode(true);
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
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
            controller: 'systemProtezyBipolarnejPharoCtrl',
            controllerAs: 'vm',
        })

        .state('trzpienESOP', {
            parent: 'biodro',
            data: {
                caption: 'Trzpie� ESOP'
            },
            url: "/trzpienESOP",
            templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
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







        .state('kregoslup', {
            parent: 'prodBase',
            data: {
                caption: 'Kregos�up'
            },
            url: "/kolano",
            templateUrl: "app/content/prodBase/kolano/kolano.html",
            controller: 'kregoslupCtrl',
            controllerAs: 'vm',
        })





        //.state('calcanail', {
        //    parent: 'foot',
        //    data: {
        //        caption: 'calcanail'
        //    },
        //    url: "/calcanail",
        //    templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //    controller: 'calcanailCtrl',
        //    controllerAs: 'vm',
        //})
        //        .state('calcanailInfo', {
        //            parent: 'calcanail',
        //            controller: 'calcanailCtrl',
        //            controllerAs: 'vm',
        //            data: {
        //                caption: 'Info'
        //            },
        //            url: "/calcanailInfo",
        //            templateUrl: "app/content/prodBase/foot/calcanail/calcanail.html",
        //        })
        //        .state('calcanailInstrumentation', {
        //            parent: 'calcanail',
        //            data: {
        //                caption: 'Instrumentation'
        //            },
        //            url: "/calcanailInstrumentation",
        //            templateUrl: "app/content/prodBase/foot/calcanail/calcanailInstrumentation.html",
        //        })
        //        .state('calcanailTechniqueForFracture', {
        //            parent: 'calcanail',
        //            controller: 'calcanailTechniqueForFractureCtrl',
        //            controllerAs: 'vm',
        //            data: {
        //                caption: 'Technika do zlaman'
        //            },
        //            url: "/calcanailTechniqueForFracture",
        //            templateUrl: "app/content/prodBase/foot/calcanail/calcanailTechniqueForFracture/calcanailTechniqueForFracture.html",
        //        })
        //        .state('calcanailTechnikaArtodezaPodskokowa', {
        //            parent: 'calcanail',
        //            controller: 'calcanailTechniqueArthoCtrl',
        //            controllerAs: 'vm',
        //            data: {
        //                caption: 'Technika do artrodezy podskokowej'
        //            },
        //            url: "/calcanailTechnikaArtodezaPodskokowa",
        //            templateUrl: "app/content/prodBase/foot/calcanail/calcanailTechniqueArtho/calcanailTechniqueArtho.html",
        //        })
        //        .state('calcanailMiroslawFalis', {
        //            parent: 'calcanail',
        //            controller: 'calcanailCtrl',
        //            controllerAs: 'vm',
        //            data: {
        //                caption: 'Referat - Miroslaw Falis'
        //            },
        //            url: "/calcanailMiroslawFalis",
        //            templateUrl: "app/content/prodBase/foot/calcanail/calcanailMiroslawFalis.html",
        //        })
        //.state('footMiniinwazyjna', {
        //    parent: 'foot',
        //    controller: 'footMiniinwazyjnaCtrl',
        //    controllerAs: 'vm',
        //    data: {
        //        caption: 'Miniinwazyjna'
        //    },
        //    url: "/footMiniinwazyjna",
        //    templateUrl: "app/content/prodBase/foot/miniinwazyjna/footMiniinwazyjna.html",
        //})
        //.state('footScrews', {
        //    parent: 'foot',
        //    controller: 'footScrewsCtrl',
        //    controllerAs: 'vm',
        //    data: {
        //        caption: 'Sruby - screws'
        //    },
        //    url: "/footScrews",
        //    //templateUrl: "app/content/prodBase/foot/screws/screws.html",
        //    templateUrl: 'app/common/inProgress.html'
        //})
        //.state('footTenolig', {
        //    parent: 'foot',
        //    data: {
        //        caption: 'Tenolig'
        //    },
        //    url: "/tenolig",
        //    templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //    controller: 'footTenoligCtrl',
        //    controllerAs: 'vm',
        //})
        //           .state('footTenoligPostOperative', {
        //               parent: 'footTenolig',
        //               data: {
        //                   caption: 'Post operative management & rehabilitation'
        //               },
        //               url: "/postOperativeManagementAndRehabilitation",
        //               templateUrl: "app/content/prodBase/foot/tenolig/postOperativeManagementAndRehabilitation.html",
        //           })
        //           .state('footTenoligAchillesTendonRuptures', {
        //               parent: 'footTenolig',
        //               data: {
        //                   caption: 'Achilles Tendon Ruptures'
        //               },
        //               url: "/achillesTendonRuptures",
        //               templateUrl: "app/content/prodBase/foot/tenolig/achillesTendonRuptures.html",
        //           })
        //           .state('footTenoligSurgicalTechnique', {
        //               parent: 'footTenolig',
        //               data: {
        //                   caption: 'Surgical technique'
        //               },
        //               url: "/surgicalTechnique",
        //               templateUrl: "app/content/prodBase/foot/tenolig/surgicalTechnique.html",
        //           })
        //           .state('footTenoligReferences', {
        //               parent: 'footTenolig',
        //               data: {
        //                   caption: 'References'
        //               },
        //               url: "/references",
        //               templateUrl: "app/content/prodBase/foot/tenolig/references.html",
        //           })
        //           .state('footTenoligVideo', {
        //               controller: 'footTenoligCtrl',
        //               controllerAs: 'vm',
        //               parent: 'footTenolig',
        //               data: {
        //                   caption: 'Video'
        //               },
        //               url: "/video",
        //               templateUrl: "app/content/prodBase/foot/tenolig/video.html",
        //           })


        //.state('upperExternity', {
        //    parent: 'prodBase',
        //    data: {
        //        caption: 'Upper externity'
        //    },
        //    url: "/upperExternity",
        //    templateUrl: "app/content/prodBase/upperExternity/upperExternity.html",
        //    controller: 'upperExternityCtrl',
        //    controllerAs: 'vm',
        //})
        //    .state('upperExternityTelegraph', {
        //        parent: 'upperExternity',
        //        data: {
        //            caption: 'Telegraph'
        //        },
        //        url: "/telegraph",
        //        templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //        controller: 'telegraphCtrl',
        //        controllerAs: 'vm',
        //    })
        //               .state('telegraphEvolution', {
        //                   parent: 'upperExternityTelegraph',
        //                   data: {
        //                       caption: 'Evolution'
        //                   },
        //                   url: "/evolution",
        //                   templateUrl: "app/content/prodBase/upperExternity/telegraph/telegraphEvolution.html",
        //               })
        //               .state('telegraphImplantsReferences', {
        //                   parent: 'upperExternityTelegraph',
        //                   data: {
        //                       caption: 'Implants references'
        //                   },
        //                   url: "/implantsReferences",
        //                   templateUrl: "app/content/prodBase/upperExternity/telegraph/telegraphImplantsReferences.html",
        //               })
        //               .state('telegraphTipsAndTricks', {
        //                   parent: 'upperExternityTelegraph',
        //                   data: {
        //                       caption: 'Tips and tricks'
        //                   },
        //                   url: "/tipsAndTrics",
        //                   templateUrl: "app/content/prodBase/upperExternity/telegraph/telegraphTipsAndTricks.html",
        //               })

        //    .state('upperExternityTss', {
        //        parent: 'upperExternity',
        //        data: {
        //            caption: 'TSS'
        //        },
        //        url: "/tss",
        //        templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //        controller: 'tssCtrl',
        //        controllerAs: 'vm',
        //    })
        //               .state('tssBasicInfo', {
        //                   parent: 'upperExternityTss',
        //                   data: {
        //                       caption: 'Info'
        //                   },
        //                   url: "/info",
        //                   templateUrl: "app/content/prodBase/upperExternity/tss/basicInfo.html",
        //               })
        //               .state('tssSurgicalTechnique', {
        //                   parent: 'upperExternityTss',
        //                   data: {
        //                       caption: 'Surgical technique'
        //                   },
        //                   url: "/surgicalTechnique",
        //                   templateUrl: "app/content/prodBase/upperExternity/tss/surgicalTechnique.html",
        //               })





        //.state('knee', {
        //    parent: 'prodBase',
        //    data: {
        //        caption: 'knee'
        //    },
        //    url: "/knee",
        //    templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //    controller: 'kneeCtrl',
        //    controllerAs: 'vm',
        //})
        //               .state('kneeRespectOfKneeBiomechanics', {
        //                   parent: 'knee',
        //                   data: {
        //                       caption: 'Respect of knee biomechanics'
        //                   },
        //                   url: "/respectOfKneeBiomechanics",
        //                   templateUrl: "app/content/prodBase/knee/respectOfKneeBiomechanics.html",
        //               })
        //               .state('kneeFemoral', {
        //                   parent: 'knee',
        //                   data: {
        //                       caption: 'Femoral characteristics'
        //                   },
        //                   url: "/femoral",
        //                   templateUrl: "app/content/prodBase/knee/femoral.html",
        //               })
        //               .state('kneeTibial', {
        //                   parent: 'knee',
        //                   data: {
        //                       caption: 'Tibial characteristics'
        //                   },
        //                   url: "/tibial",
        //                   templateUrl: "app/content/prodBase/knee/tibial.html",
        //               })
        //               .state('kneeCustomInstumentation', {
        //                   parent: 'knee',
        //                   data: {
        //                       caption: 'Custom instumentation'
        //                   },
        //                   url: "/customInstumentation",
        //                   templateUrl: "app/content/prodBase/knee/customInstumentation.html",
        //               })

        //.state('spine', {
        //    parent: 'prodBase',
        //    data: {
        //        caption: 'Spine'
        //    },
        //    url: "/spine",
        //    templateUrl: "app/content/prodBase/prodBaseSpecyfikacje.html",
        //    controller: 'spineCtrl',
        //    controllerAs: 'vm',
        //})
        //               .state('spineOrigin', {
        //                   parent: 'spine',
        //                   data: {
        //                       caption: 'Origin of the development'
        //                   },
        //                   url: "/origin",
        //                   templateUrl: "app/content/prodBase/spine/origin.html",
        //               })
        //               .state('spineLumbarProsthesis', {
        //                   parent: 'spine',
        //                   data: {
        //                       caption: 'Lumbar prosthesis'
        //                   },
        //                   url: "/lumbarProsthesis",
        //                   templateUrl: "app/content/prodBase/spine/lumbarProsthesis.html",
        //               })
        //               .state('spineCervicalProsthesis', {
        //                   parent: 'spine',
        //                   data: {
        //                       caption: 'Cervical prosthesis'
        //                   },
        //                   url: "/cervicalProsthesis",
        //                   templateUrl: "app/content/prodBase/spine/cervicalProsthesis.html",
        //               })


        //.state('hip', {
        //    parent: 'prodBase',
        //    controller: 'hipCtrl',
        //    controllerAs: 'vm',
        //    data: {
        //        caption: 'Biodro - hip'
        //    },
        //    url: "/hip",
        //    templateUrl: "app/content/prodBase/hip/hip.html",

        //})
        //    .state('hipTrzpienie', {
        //        parent: 'hip',
        //        controller: 'trzpienieCtrl',
        //        controllerAs: 'vm',
        //        data: {
        //            caption: 'Trzpienie'
        //        },
        //        url: "/trzpienie",
        //        templateUrl: "app/content/prodBase/hip/trzpienie/trzpienie.html",
        //    })
        //               .state('hipTrzpienieThira', {
        //                   parent: 'hipTrzpienie',
        //                   controller: 'hipTrzpienieThiraCtrl',
        //                   controllerAs: 'vm',
        //                   data: {
        //                       caption: 'Thira'
        //                   },
        //                   url: "/hipTrzpienieThira",
        //                   templateUrl: "app/content/prodBase/hip/trzpienie/thira/hipTrzpienieThira.html",
        //               })
        //               .state('hipTrzpienieHipAndGo', {
        //                   parent: 'hipTrzpienie',
        //                   controller: 'trzpienieHipAndGoCtrl',
        //                   controllerAs: 'vm',
        //                   data: {
        //                       caption: 'Hip & Go'
        //                   },
        //                   url: "/hipTrzpienieHipAndGo",
        //                   templateUrl: "app/content/prodBase/hip/trzpienie/hipAndGo/trzpienieHipAndGo.html",
        //               })
        //               .state('hipTrzpienieEsop', {
        //                   parent: 'hipTrzpienie',
        //                   //controller: 'trzpienieEsopCtrl',
        //                   //controllerAs: 'vm',
        //                   data: {
        //                       caption: 'Esop'
        //                   },
        //                   url: "/hipTrzpienieEsop",
        //                   //templateUrl: "app/content/prodBase/hip/trzpienie/hipAndGo/trzpienieEsop.html",
        //                   templateUrl: 'app/common/inProgress.html'
        //               })

        //.state('hipPanewki', {
        //    parent: 'hip',
        //    controller: 'panewkiCtrl',
        //    controllerAs: 'vm',
        //    data: {
        //        caption: 'Panewki'
        //    },
        //    url: "/panewki",
        //    templateUrl: "app/content/prodBase/hip/panewki/panewki.html",
        //})
        //           .state('hipPanewkiAtlante', {
        //               parent: 'hipPanewki',
        //               controller: 'panewkiAtlanteCtrl',
        //               controllerAs: 'vm',
        //               data: {
        //                   caption: 'Atlante 2'
        //               },
        //               url: "/Atlante2",
        //               templateUrl: "app/content/prodBase/hip/panewki/atlante/panewkiAtlante.html",
        //           })
        //           .state('hipPanewkiAtlas', {
        //               parent: 'hipPanewki',
        //               controller: 'panewkiAtlasCtrl',
        //               controllerAs: 'vm',
        //               data: {
        //                   caption: 'Atlas'
        //               },
        //               url: "/Atlas",
        //               templateUrl: "app/content/prodBase/hip/panewki/atlas/panewkiAtlas.html",
        //           })
        //           .state('hipPanewkiHipAndGo', {
        //               parent: 'hipPanewki',
        //               controller: 'panewkiHipAndGoCtrl',
        //               controllerAs: 'vm',
        //               data: {
        //                   caption: 'Hip&Go'
        //               },
        //               url: "/HipAndGo",
        //               templateUrl: "app/content/prodBase/hip/panewki/hipAndGo/panewkiHipAndGo.html",
        //           })
        //               .state('hipPanewkiHipAndGoDual', {
        //                   parent: 'hipPanewkiHipAndGo',
        //                   controller: 'panewkiHipAndGoDualCtrl',
        //                   controllerAs: 'vm',
        //                   data: {
        //                       caption: 'Dual'
        //                   },
        //                   url: "/dual",
        //                   templateUrl: "app/content/prodBase/hip/panewki/hipAndGo/panewkiHipAndGoDual.html",
        //               })
        //               .state('hipPanewkiHipAndGoTripod', {
        //                   parent: 'hipPanewkiHipAndGo',
        //                   controller: 'panewkiHipAndGoTripodCtrl',
        //                   controllerAs: 'vm',
        //                   data: {
        //                       caption: 'Tripod'
        //                   },
        //                   url: "/tripod",
        //                   templateUrl: "app/content/prodBase/hip/panewki/hipAndGo/panewkiHipAndGoTripod.html",
        //               })
        //               .state('hipPanewkiHipAndGoPressFit', {
        //                   parent: 'hipPanewkiHipAndGo',
        //                   controller: 'panewkiHipAndGoPressFitCtrl',
        //                   controllerAs: 'vm',
        //                   data: {
        //                       caption: 'PressFit'
        //                   },
        //                   url: "/pressFit",
        //                   templateUrl: "app/content/prodBase/hip/panewki/hipAndGo/panewkiHipAndGoPressFit.html",
        //               })
    };
})();