// import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
// import {Mutable} from '../app.component';
//
// @Component({
//   selector: 'app-counter',
//   template: `
//     Items in cart:
//     {{ testMutable.firstName }}
//     <button (click)="changeVariableInCounter()">Change variable</button>
//     {{counterVar}}
//   `,
//   // changeDetection: ChangeDetectionStrategy.OnPush,
//   styleUrls: ['./couter.component.scss']
// })
// export class CouterComponent implements OnInit {
//   get counterVar(): number {
//     console.log('COUNTER : GET VAR ' + this._testMutable);
//     return this._counterVar;
//   }
//
//   set counterVar(value: number) {
//     console.log('COUNTER : SET VAR  ' + this._testMutable);
//     this._counterVar = value;
//   }
//
//   private _counterVar: number;
//   get testMutable(): Mutable {
//     console.log('COUNTER : GET ' + this._testMutable);
//     return this._testMutable;
//   }
//
//   set testMutable(value: Mutable) {
//     console.log('COUNTER : SET ' + value);
//     this._testMutable = value;
//   }
//
//   @Input() private _testMutable: Mutable;
//
//   constructor() {
//     this.counterVar = 0;
//   }
//
//   changeVariableInCounter() {
//     this.counterVar = this.counterVar + 1;
//
//   }
//
//   ngOnInit() {
//   }
//
// }
