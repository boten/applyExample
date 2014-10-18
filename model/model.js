/**
 * Created by nadavv on 9/13/14.
 */

(function(){

    /**
     * attach the dataObj that resolved in the router
     * to the scope
     * @param $scope
     */
    function model1($scope){
        $scope.count = 1;
    }

    function model2($scope){

    }

    function model3($scope){

    }

    angular.module('test')
        .controller('model1',['$scope',model1])
        .controller('model2',['$scope',model2])
        .controller('model3',['$scope',model3])
}());

