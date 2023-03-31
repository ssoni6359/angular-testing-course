import { fakeAsync, flush, tick } from "@angular/core/testing";

fdescribe('Async Testing Examples', () => {
    
    it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            console.log('running assertions');
            test = true;
            expect(test).toBeTruthy();
            done();
        }, 1000);
    });

    //Angular Zone
    it('Asynchronous test example - setTimeout()', fakeAsync(() => {
        let test = false;
        
        // setTimeout(() => { });

        setTimeout(() => {
            test = true;
            console.log('running assertions setTimeout()');
            // expect(test).toBeTruthy(); -> remove assertion from timeout and do as normal
        }, 1000);
        
        // tick(1000);
        // tick(500);
        // tick(499);
        // tick(1);
        
        flush();
        expect(test).toBeTruthy();

    }));
});