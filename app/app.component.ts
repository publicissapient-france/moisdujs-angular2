import {Component} from "@angular/core";
import {SlotGridComponent} from "./slot-grid/slot-grid.component";
import {SlotStore, Grid} from "./slot-store/slot-store.service";
import {SlotFormComponent} from "./slot-form/slot-form.component";

@Component({
  selector: 'my-app',
  template: `
      <slot-grid [columns]="grid.columns"></slot-grid>
      <slot-form [themes]="grid.themes" (onCreate)="grid.addSlot($event)"></slot-form>
    `,
  providers: [SlotStore],
  directives: [SlotGridComponent, SlotFormComponent]
})
export class AppComponent {
  grid:Grid;

  constructor(public slotStore:SlotStore) { }

  ngOnInit() {
    this.grid = this.slotStore.getGrid();
  }
}
