/**
 * Created by student on 23.12.16.
 */
(function ()
{
    'use strict';
    function LogFactory($localStorage)
    {

        var LogObj = function (message)
        {
            this.message = message;
            this.date = new Date();
        };

        function LoggerFacto(){
            var ctrl = this;
            ctrl.logArr = $localStorage.log;
            ctrl.addLog = function(message)
            {
                ctrl.logArr.push(new LogObj(message));
            };

            ctrl.getLog = function ()
            {
                return ctrl.logArr;
            };

            ctrl.empty = function ()
            {
                ctrl.logArr = [];
            };
        }

        return new LoggerFacto();
    }

    angular.module('cinkciarzTraining')
            .factory('LogFactory', LogFactory);

})();
