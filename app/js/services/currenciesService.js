/**
 * Created by sunday on 12/6/16.
 */
(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining').factory('CurrenciesService', CurrenciesService);

    function CurrenciesService($http, $q) {

        return {
            getCurrencies: function () {
                var deffered = $q.defer();
                $http.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/').success(function (data) {
                    return deffered.resolve(data);
                })
                    .error(function(data){
                    return deffered.reject(data);
                });

                return deffered.promise;
            }
        }
    }

})
(angular);