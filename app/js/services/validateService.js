/**
 * Created by student on 13.12.16.
 */
(function(angular){
    'use strict';

    function ValidateService($timeout){

        this.show = false;

        this.getShow = function(){
            console.log('show',this.show);
            return this.show;
        };

        this.validate = function(value,message){
            if (value === undefined || value === '' || parseInt(value, 10) === 0) {
                this.show = true;
                message = 'Nie wpisałeś ilości';
                $timeout(function ()
                {
                    message = '';
                    this.show = false;
                }, 5000);
                return true;
            } else {
                this.show = false;
                return false;
            }
        };

    }

    angular.module('cinkciarzTraining')
        .service('ValidateService', ValidateService);



})(angular);
