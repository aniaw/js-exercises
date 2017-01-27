describe('StartCtrl', function ()
{
    'use strict';

    var startCtrl;
    var $localStorageMock;
    var $locationMock;
    var $uibModalMock;
    var $sessionStorageMock;
    var CurrenciesServiceMock;


    beforeEach(module('cinkciarzTraining'));

    beforeEach(inject(function($controller,_$localStorage_,_$location_, _$uibModal_, _$sessionStorage_, CurrenciesService){
        $localStorageMock = _$localStorage_;
        $locationMock = _$location_;
        $uibModalMock = _$uibModal_;
        $sessionStorageMock = _$sessionStorage_;
        CurrenciesServiceMock = CurrenciesService;


        startCtrl = $controller('StartController', {
            $localStorage: $localStorageMock,
            $location: $locationMock,
            $uibModal: $uibModalMock,
            $sessionStorage: $sessionStorageMock,
            CurrenciesService: CurrenciesServiceMock
        });

    }));

    describe('initialization', function ()
    {

        it('should sessionStorage.isRandom set to false', function ()
        {
            expect($sessionStorageMock.isRandom).toBeFalsy();
        });



    });
});
