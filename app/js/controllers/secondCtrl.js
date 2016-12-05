/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('SecondController', SecondController);
    function SecondController($localStorage){
        var vm = this;
        vm.$storage = $localStorage;

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        }
    }
})(angular);