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