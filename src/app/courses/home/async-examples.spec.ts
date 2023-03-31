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

    //Promise-> micro tasks, setTimeout-> Macro task/ Task
    fit('Asynchronous test example - plain Promise', () => {
        let test = false;
        console.log('Creating promise');

        setTimeout(()=>{ console.log('setTimeout() first callback triggered'); });
        setTimeout(()=>{ console.log('setTimeout() second callback triggered'); });

        Promise.resolve().then(() => {
            console.log('Promise first then() resolved successfully');
            // test = true;
            return Promise.resolve();
        }).then(()=> {
            console.log('Promise second then() resolved successfully');
            test = true;
        });

        console.log('running test assertions');
        expect(test).toBeTruthy();
    });
});

// Promise has priority over setTimeout - [Wrong to say]. Instead, first micro task then macro tasks.

// All those asynchronous macro operations(timeout, ajax, clicks, etc.) will get added to the event loop.
// And between each of these macro tasks, the browser rendering engine is going to get a chance to update.

// Promises are added to their own queue. Micro tasks are more lightweight & allow our runtime to be more responsive.
//Therefore, there are two separate queues in the JavaScript runtime for asynchronous tasks.