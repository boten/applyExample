/**
 * Created by nadavv on 9/13/14.
 */

(function(){

    /**
     * attach the dataObj that resolved in the router
     * to the scope
     * @param $scope
     */
    function mainListController($scope,dataService,$timeout){
        $scope.itemList = []
        $scope.mainNumber= dataService.number;
        $scope.mainNumberObject= dataService.numberObject;
        $scope.mainNumberFunction= dataService.getNumberFunction;
        $scope.mainNumberFunctionActiveted= dataService.getNumberFunction();
        $scope.increase = function(){
            dataService.up();
        }
        $scope.runApply = function(){
            var phase = $scope.$$phase;
            if (phase !== '$apply' & '$digest'){
                $scope.$apply();
            }
            else {
                alert('apply in progress waiting 5 sec');
                $timeout(function(){
                    alert(' befor you press ok look to the left at "number string" that is now updated to 4')
                    $scope.mainNumber = dataService.number;
                    $scope.wrap.number = dataService.number;
                    $scope.$apply()},5000);
            }

        }
    }

    angular.module('test')
        .controller('mainListController',['$scope','dataService','$timeout',mainListController]);
}());

