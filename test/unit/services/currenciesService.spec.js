describe('CurrenciesService', function ()
{
    'use strict';

    var CurrenciesMock;
    var httpMock;
    var qMock;
    var httpBackend;
    var fakeRates = [
        {
            buy: 4.1635, code: 'USD', date: '2017-01-20', sell: 4.0811
        }, {
            buy: 4.4112, code: 'EUR', date: '2017-01-20', sell: 4.3238
        }, {
            buy: 5.123, code: 'GBP', date: '2017-01-20', sell: 5.0216
        }
    ];
    var urls;
    var urlsCalls = [];
    var count = 0;
    var rootScope;

    beforeEach(module('cinkciarzTraining', function ($provide)
    {
        $provide.value('CurrenciesService', {
            getCurrencies: jasmine.createSpy('getCurrencies').and.callFake(function ()
            {
                return successfulPromise(fakeRates);
            })
        });
    }));
    beforeEach(inject(function (_$httpBackend_,_CurrenciesService_, _$http_, _$q_, _$rootScope_)
    {
        httpBackend = _$httpBackend_;
        qMock = _$q_;
        httpMock =_$http_;
        CurrenciesMock = _CurrenciesService_;
        rootScope = _$rootScope_;

        /*urls = [{url: 'https://api.nbp.pl/api/exchangerates/rates/c/usd/today/'}, {url: 'https://api.nbp.pl/api/exchangerates/rates/c/eur/today/'},
            {url: 'https://api.nbp.pl/api/exchangerates/rates/c/gbp/today/'}];
        count = urls.length;
        angular.forEach(urls, function (url)
        {
            urlsCalls.push(httpMock.get(url.url));
        });*/




    }));
    afterEach(function() {
    // httpBackend.verifyNoOutstandingExpectation();
    // httpBackend.verifyNoOutstandingRequest();
    });

    describe('getCurencies', function ()
    {
        describe('when call requests', function ()
        {
            beforeEach(function ()
            {
                // jasmine.createSpy(CurrenciesMock, 'getCurrencies').and.callFake(
                //         function(){ return successfulPromise(fakeRates);});
            });
            it('should return rates', function (done)
            {
                var promise = CurrenciesMock.getCurrencies();
                promise.then(function (response)
                {

                    expect(response).toBe(fakeRates);
                });
                done();

            });
        });
    });
});

