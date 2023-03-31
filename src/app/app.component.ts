import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Testing Course';
}

// For code coverage -> use 
// ng test --watch=false --code-coverage

// install: npm install -g http-server [not necessary]
// run: http-server -c-1 .

// -c-1 -> disable caching headers
// .    -> current folder

//For build: we use: ng build --prod [old]
//ng build --configuration=production, or ng build -c=production [new]

// Then, run: npm run start:prod
// Now, run[in prod mode]: cypress run. Also, run cypress integration tests [in sep. terminal] -> 2 terminal req
// Imp: -> shows result in terminal

// run mutilple tasks in sequence -> we use npm-run-all package.
// It contains a binary: run-s -> This allow to run things in sequence independently of the operating system.
// NOT WORKS on Windows: npm run build:prod && npm run start:prod

// run: npm run build-and-start:prod

// Its important to wait for the server to be ready before starting the tests.
// For this, we use: start-server-and-test 
// After that, give the command to run, and also the url followed by test command ie. cypress:run

//After run: npm run e2e. It generate all reports.