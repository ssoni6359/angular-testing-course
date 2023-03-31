import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

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

    it('Asynchronous test example - setTimeout()', fakeAsync(() => {
        let test = false;
        setTimeout(() => { });
        setTimeout(() => {
            test = true;
            console.log('running assertions setTimeout()');
        }, 1000);
        // tick(1000);        
        flush();
        expect(test).toBeTruthy();
    }));

    fit('Asynchronous test example - plain Promise', fakeAsync(() => {
        let test = false;
        console.log('Creating promise');

        // setTimeout(()=>{ console.log('setTimeout() first callback triggered'); });
        // setTimeout(()=>{ console.log('setTimeout() second callback triggered'); });

        Promise.resolve().then(() => {
            console.log('Promise first then() resolved successfully');
            // test = true;
            return Promise.resolve();
        }).then(()=> {
            console.log('Promise second then() resolved successfully');
            test = true;
        });

        flushMicrotasks();
        console.log('running test assertions');
        expect(test).toBeTruthy();
    }));
});