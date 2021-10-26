import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/input.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.sass']
})
export class SearchViewComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    processPanel("search-panel", false);
  }

  showSearchField(): void {
    processPanel("search-panel", true);
    activeQueryEffect("card", true);
  }

  resetShowSearchField(): void {
    processPanel("search-panel", false);
    activeQueryEffect("card", false);
  }

  emittedUserInput(emittedValue: string): void {
    this.notificationService.announcementMade(emittedValue);
    this.resetShowSearchField();
  }

  emittedUserClick(emittedValue: boolean): void {
    if (emittedValue) {
      this.showSearchField();
    } else {
      this.resetShowSearchField();
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

function activeQueryEffect(child: string, activeQuery: boolean) {
  if (activeQuery) {
    blurCardFunction(child);
  } else {
    focusCardFunction(child);
  }
}

function blurCardFunction(child: string) {
  for (let indexedNode = 0; indexedNode < document.getElementsByClassName(child).length; indexedNode++) {
    document.getElementsByClassName(child).item(indexedNode)?.classList.add("bd");
  }
}

function focusCardFunction(child: string) {
  for (let indexedNode = 0; indexedNode < document.getElementsByClassName(child).length; indexedNode++) {
    document.getElementsByClassName(child).item(indexedNode)?.classList.remove("bd");
  }
}

const attributeValue = {
  BLOCK: "display:block",
  NONE: "display:none"
}
