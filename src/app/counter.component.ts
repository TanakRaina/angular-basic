
import { Component , Input } from '@angular/core';

@Component({
selector :'counter',
template : `
<div class="counter">
<button (click)="clear()">Clear</button>
<input type="text" [value]="count">
<button (click)="decrement()">Decrement</button>
<button (click)="increment()">Increment</button>

</div>
`,
styles:[`
    .counter {
      position: relative;
    }
    input {
      border: 0;
      text-align: center;
      color: #E74C3C;
      font-weight:bold;
    }
    button {
      cursor: pointer;
      height: 30px;
      border: 0;
      background: #0088cc;
      color: #fff;


    }
  `]
})
export class CounterComponent{

@Input() count: number = 0;

increment() {
  this.count++;
}
decrement() {
  this.count--;
}
clear() {
  this.count = 0;
}
}
