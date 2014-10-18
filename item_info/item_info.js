/**
 * Created by nadavv on 9/13/14.
 */

(function(){
    function itemInfoController(scope,state,dataService){
        scope.list = dataService.getList();

        scope.name = 'hello';

    };

    angular.module('test')
        .controller('itemInfoController',['$scope','$state','dataService',itemInfoController]);
}());

