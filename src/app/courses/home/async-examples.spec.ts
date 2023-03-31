import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

fdescribe('Async Testing Examples', () => {
    
    it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            // console.log('running assertions');
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
            // console.log('running assertions setTimeout()');
        }, 1000);
        // tick(1000);        
        flush();
        expect(test).toBeTruthy();
    }));

    it('Asynchronous test example - plain Promise', fakeAsync(() => {
        let test = false;
        // console.log('Creating promise');

        // setTimeout(()=>{ console.log('setTimeout() first callback triggered'); });
        // setTimeout(()=>{ console.log('setTimeout() second callback triggered'); });

        Promise.resolve().then(() => {
            // console.log('Promise first then() resolved successfully');
            // test = true;
            return Promise.resolve();
        }).then(()=> {
            // console.log('Promise second then() resolved successfully');
            test = true;
        });

        flushMicrotasks();
        // console.log('running test assertions');
        expect(test).toBeTruthy();
    }));

    it('Asynchronous test example - Promises + setTimeout()', fakeAsync(() => {
        let counter = 0;
        Promise.resolve().then(()=> {
            counter += 10;
            setTimeout(()=> { counter += 1 }, 1000)
        });
        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);

        tick(500);
        expect(counter).toBe(10);
        tick(500);
        
        // flush();
        expect(counter).toBe(11);
    }));

    it('Asynchronous test example - Observables', fakeAsync(() => {
        let test = false;
        console.log('Creating Observable');

        // const test$ = of(test); -> Synchronous Observables 

        const test$ = of(test).pipe(delay(1000)); // Asynchronous Observables -> use fakeAsync
        test$.subscribe(() => { test = true; });
        tick(1000);

        console.log('Running test assertions');
        expect(test).toBe(true);
    }));
});

// Asynchronous Observables -> uses internally some time functions or have some delay 