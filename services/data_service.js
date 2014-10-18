/**
 * Created by nadavv on 9/13/14.
 */
(function () {
    angular.module('test.services', [])
        .service('dataService', ['$http', dataService]);

    function dataService() {
        var self =this;
        var number = '3';
        var numberObject = {number : '9'};

        var list = [
            {name : 'nadav', pet: 'dog'},
            {name : 'nadav2', pet: 'dog2'},
            {name : 'nadav3', pet: 'dog3'},
            {name : 'nadav4', pet: 'dog4'},
            {name : 'nadav5', pet: 'dog5'},
            {name : 'nadav6', pet: 'dog6'},
        ]

        this.getList = function(){
            return list;
        }

        this.number = number;

        this.numberObject = numberObject;

        this.getNumberFunction = function (){
            return number
        }

        this.up = function(){
            ++number;
            ++self.number
            ++numberObject.number;
            alert('dataService string number value is :'+number+
                '\ndataService object number value is :'+numberObject.number+
            '\nyou can see the number string is still 3 '+
            '\nso we nee to run apply manually by pressing the "run apply" btn');
        }

    }

}());






