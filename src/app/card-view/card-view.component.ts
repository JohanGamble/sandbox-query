import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/client.request.service';
import { NotificationService } from '../services/input.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass']
})
export class CardViewComponent implements OnInit {
  generalArr: any[] = [];
  inputFieldText: string = "";
  buttonText: string = "";

  constructor(private configService: ConfigService, private notificationService: NotificationService) {
    this.notificationService.announcementStatus$.subscribe((inputText) => {
      this.userQuery(inputText);
    })
  }

  ngOnInit(): void {
    this.buttonText = "More Info";
    this.showConfig();
  }

  userQuery(inputText: string): void {
    this.inputFieldText = encodeURI(inputText);
  }

  emittedUserClick(emittedValue: any): void {
    if (emittedValue) {
    }
  }

  showConfig() {
    this.configService.getRequest().subscribe((data: any) => {
      if (data) {
        let mongodb = data.body;
        this.generalArr = mongodb;
      }
    }, (e: Error) => {
      return e;
    }, () => { return "Request completed" });
  }
}