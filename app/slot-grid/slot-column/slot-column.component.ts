import {Component, Input} from '@angular/core';
import {SlotColumn} from "../../slot-store/slot-store.service";

@Component({
  selector: 'slot-column',
  template: `
    <section>
      <h4>{{ data.theme }}</h4>
      <div *ngFor="let slot of data.slots">
        {{ slot.title }}
      </div>
    </section>
  `
})
export class SlotColumnComponent {

  @Input()
  data:SlotColumn;

  constructor() { }

}
