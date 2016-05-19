import {Component, Input} from '@angular/core';
import {SlotColumn} from "../../slot-store/slot-store.service";

@Component({
  selector: 'slot-column',
  template: `
    <section>
      <h4>{{data.theme}}</h4>
      <div *ngFor="let slot of data.slots">
        {{ slot.title }}
      </div>
    </section>
  `,
  styles: [`
    section { 
      display: inline-block;
      margin: 0;
      vertical-align: top;
    }
    h4 {
      background: lightgray;
      margin: 0;
      padding: 10px;
      min-height: 72px;
      font-size: 16px;
    }
    div {
      border-top: 1px solid #eceeef;
      padding: 10px;
    }
    :host {
      display: inline-block;
      vertical-align: top;
      border: 1px solid #eceeef;
    }
  `]
})
export class SlotColumnComponent {

  @Input()
  data:SlotColumn;

  constructor() { }

}
