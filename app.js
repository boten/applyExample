

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('test', ['test.services','ui.router'])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'main_list/main_list.html',
                controller: 'mainListController',
                controllerAs: 'mainList'

            })
            .state('info',{
                url: '/info',
                templateUrl: 'item_info/item_info.html',
                controller: 'itemInfoController',
                controllerAs : 'item'

            })
    })
    .controller('wrapperController',['$scope','dataService',function(scope,dataService){
        scope.number= dataService.number;
        scope.numberObject= dataService.numberObject;
        scope.NumberFunction = dataService.getNumberFunction;

    }])
    .run(function() {

    });

