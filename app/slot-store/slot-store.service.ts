import {Injectable} from '@angular/core';

@Injectable()
export class SlotStore {
  grid:Grid = new Grid([
    { theme: 'Project Bootstrapping', slots: [ {title: 'Webpack'}, {title: 'JSPM'} ] },
    { theme: 'Les 4 fantastiques framework Front', slots: [ {title: 'Angular2'}, {title: 'Ember2'} ] },
    { theme: 'Qualité et performances Javascript', slots: [ {title: 'Karma'} ] },
    { theme: 'Le cabinet de curiosité Javascript', slots: [ {title: 'Electron'}, {title: 'Ramda'}, {title: 'Ethereum'} ] }
  ]);

  getGrid():Grid {
    return this.grid;
  }
}

export class Slot {
  title:string;
}

export class SlotColumn {
  theme:string;
  slots:Array<Slot>;
}

export class Grid {
  constructor(public columns:Array<SlotColumn>) { }

  get themes():Array<string> {
    return this.columns.map(column => column.theme);
  }

  addSlot(slot:any) {
    let found = this.columns.filter(column => column.theme === slot.theme);
    if (found.length) {
      found[0].slots.push({title: slot.title});
    }
  }
}


