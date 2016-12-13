/**
 * Created by student on 13.12.16.
 */
(function(){
    'use strict';

    function NavbarController(){
        var vm = this;
        vm.navCollapsed = true;

        function toggleCollapse(){
            vm.navCollapsed = !vm.navCollapsed;
            console.log(vm.navCollapsed);
        }

        vm.toggleCollapse = toggleCollapse;

    }

    angular.module('cinkciarzTraining')
        .controller('NavbarController', NavbarController);


})();
