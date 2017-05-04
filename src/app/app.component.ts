import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
  <counter [count] ="initialCount"></counter>

  </h1>
  <p>
<calculate [footer]="message"></calculate>
</p>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Counter';
  initialCount: number = 10;
  message: string = "Calculated results !";
  ;
}
