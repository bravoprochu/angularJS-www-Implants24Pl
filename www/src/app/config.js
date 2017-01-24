(function () {
    'use strict';

    var app = angular.module('app')
        .value('duScrollDuration', 500)
        .value('duScrollOffset', 0)
        .config(appConfig);
    
    appConfig.$inject=['$mdIconProvider', '$mdThemingProvider', 'toastrConfig'];

    function appConfig ($mdIconProvider, $mdThemingProvider, toastrConfig) {

        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-bottom-full-width',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',
            timeOut:3000,
        });


        $mdIconProvider
            .icon('add', 'fonts/ic_add_24px.svg', 24)
            .icon('add_person', 'fonts/ic_person_add_24px.svg', 24)
            .icon('arrowUp', 'fonts/ic_arrow_drop_up_24px.svg', 24)
            .icon('arrowDown', 'fonts/ic_arrow_drop_down_24px.svg', 24)
            .icon('back', 'fonts/ic_arrow_back_24px.svg', 24)
            .icon('cancel', 'fonts/ic_cancel_24px.svg', 24)
            .icon('clone', 'fonts/ic_clone_24px.svg',48)
            .icon('code', 'fonts/ic_code_24px.svg', 24)
            .icon('delete', 'fonts/ic_delete_24px.svg', 24)
            .icon('done_all', 'fonts/ic_done_all_24px.svg', 24)
            .icon('edit', 'fonts/ic_edit_24px.svg', 24)
            .icon('exit', 'fonts/ic_exit_to_app_24px.svg', 24)
            .icon('exit2', 'fonts/ic_power_settings_new_24px.svg', 24)
            .icon('home', 'fonts/ic_home_24px.svg', 24)
            .icon('list', 'fonts/ic_format_list_numbered_24px.svg', 24)
            .icon('list2', 'fonts/ic_list_black_24px.svg', 24)
            .icon('login', 'fonts/login_24px.svg', 24)
            .icon('location', 'fonts/ic_location_on_24px.svg')
            .icon('menu', 'fonts/ic_menu_24px.svg', 24)
            .icon('more_vert', 'fonts/ic_more_vert_24px.svg', 24)
            .icon('qrCode', 'fonts/qrcode-512px.svg', 24)
            .icon('pause', 'fonts/ic_pause_circle_outline_black_24px.svg', 24)
            .icon('play', 'fonts/ic_play_circle_outline_black_24px.svg', 24)
            .icon('refresh', 'fonts/ic_refresh_24px.svg', 24)
            .icon('register', 'fonts/register_24px.svg', 24)
            .icon('remove_circle', 'fonts/ic_remove_circle_outline_24px.svg', 24)
            .icon('save', 'fonts/ic_save_24px.svg', 24)
            .icon('search', 'fonts/ic_search_24px.svg', 24)
            .icon('selectAll', 'fonts/ic_select_all_24px.svg', 24)
            .icon('sort', 'fonts/ic_sort_by_alpha_24px.svg', 24)
            .icon('szukaj', 'fonts/ic_szukaj_24px.svg', 24)
            .icon('warning', 'fonts/ic_warning_24px.svg', 24);



        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .warnPalette('indigo')
        .backgroundPalette('lime', {
            'default': '50', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': 'A200', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        });


        //$mdThemingProvider.theme('default')
        //.primaryPalette('blue', {
        //    //'default': '400',
        //    //'hue-1': '900', 
        //    //'hue-2': '700', 
        //    //'hue-3': '500',

        //    'default': '100', // by default use shade 400 from the pink palette for primary intentions
        //    'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class
        //    'hue-2': 'A200', // use shade 600 for the <code>md-hue-2</code> class
        //    'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        //})
        //.accentPalette('blue-grey', {
        //    'default': '400', // by default use shade 400 from the pink palette for primary intentions
        //    'hue-1': '900', // use shade 100 for the <code>md-hue-1</code> class
        //    'hue-2': '700', // use shade 600 for the <code>md-hue-2</code> class
        //    'hue-3': '500' // use shade A100 for the <code>md-hue-3</code> class
        //})
        //.warnPalette('orange', {
        //    'default': '50', // by default use shade 400 from the pink palette for primary intentions
        //    'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class
        //    'hue-2': 'A200', // use shade 600 for the <code>md-hue-2</code> class
        //    'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        //})

        //.backgroundPalette('blue', {
        //    'default': '50', // by default use shade 400 from the pink palette for primary intentions
        //    'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class
        //    'hue-2': 'A200', // use shade 600 for the <code>md-hue-2</code> class
        //    'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        //});



        //$mdDateLocaleProvider.months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
        //$mdDateLocaleProvider.shortMonths = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
        //$mdDateLocaleProvider.days = ['niedziela','poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
        //$mdDateLocaleProvider.shortDays = ['Nd','Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'];

        //$mdDateLocaleProvider.firstDayOfWeek = 1;
        //$mdDateLocaleProvider.parseDate = function (dateString) {
        //    var m = moment(dateString, 'L', true);
        //    return m.isValid() ? m.toDate() : new Date(NaN);
        //};
        //$mdDateLocaleProvider.formatDate = function (date) {
        //    return moment(date).format('L');
        //};
        //$mdDateLocaleProvider.monthHeaderFormatter = function (date) {
        //    return $mdDateLocaleProvider.shortMonths[date.getMonth()] + ' '+moment(date).year();
        //};

    };
})();