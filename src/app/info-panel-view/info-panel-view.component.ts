import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-panel-view',
  templateUrl: './info-panel-view.component.html',
  styleUrls: ['./info-panel-view.component.sass']
})
export class InfoPanelViewComponent implements OnInit {

  ngOnInit(): void {
    processPanel("info-panel", false);
  }

  showInfoPanel(): void {
    processPanel("info-panel", true);
  }

  resetInfoPanel(): void {
    processPanel("info-panel", false);
  }

  emittedUserClick(emittedValue: boolean): void {
    if (emittedValue) {
      this.showInfoPanel();
    } else {
      this.resetInfoPanel();
    }
  }
}

function processPanel(id: string, show: boolean) {
  document.getElementById(id)?.setAttribute("style", attributeValueState(show));
  return show;
}

function attributeValueState(show: boolean) {
  if (show) {
    return attributeValue.BLOCK;
  }
  return attributeValue.NONE;
}

const attributeValue = {
  BLOCK: "display:block",
  NONE: "display:none"
}
