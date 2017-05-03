import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Hey this{{title}}
    <counter [count] ="initialCount"></counter>
  </h1>


`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  initialCount: number =0;
}
