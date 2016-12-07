/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('InfoController', InfoController);
    function InfoController($localStorage){
        var vm = this;
        vm.$storage = $localStorage;

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        }
    }
})(angular);