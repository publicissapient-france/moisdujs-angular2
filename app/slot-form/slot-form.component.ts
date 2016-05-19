import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'slot-form',
  template: `    
    <h2>Ajouter un Slot</h2>
    <form (ngSubmit)="onSubmit()" #slotForm="ngForm">
      <div class="form-group">
        <label for="slot-column">Theme</label>
        <select id="slot-column" class="form-control" required [(ngModel)]="model.theme">
          <option *ngFor="let theme of themes" [value]="theme">{{theme}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="slot-title">Title</label>
        <input id="slot-title" type="text" [(ngModel)]="model.title" ngControl="title" class="form-control" required>
      </div>

      <button type="submit" class="btn btn-primary" id="add-slot" [disabled]="!slotForm.form.valid">Ajouter</button>
    </form>
    `,
  providers: [],
  directives: [],
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class SlotFormComponent {
  @Input()
  themes:Array<string>;

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter();

  model = { theme: '', title: '' };

  onSubmit() {
    this.onCreate.emit(Object.assign({}, this.model));
    this.model.title = '';
  }
}
