import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-view',
  templateUrl: './toolbar-view.component.html',
  styleUrls: ['./toolbar-view.component.sass']
})
export class ToolbarViewComponent {
  companyLogo: string = ""
  companySlogan: string = "DBQuery"
}
