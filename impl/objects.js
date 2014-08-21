(function () {
    'use strict';
    window.objects = {

        /*(1) Write a function to list the properties of a JavaScript object.[1]*/
        listProperties: function(obj){
            var list =[];
            for(var prop in obj){
                list.push(prop);
            }
            return list;
        }
    };
})();
