import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  table_list = [{ table: 'PO Table', angular: 'PO-UI' },
                { table: 'PO Table', angular: 'PO-UI' },  
                { table: 'PO Table', angular: 'PO-UI' },
                { table: 'PO Table', angular: 'PO-UI' }, 
                { table: 'PO Table', angular: 'PO-UI' }, 
                { table: 'PO Table', angular: 'PO-UI' }]
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
