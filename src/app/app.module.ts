import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardViewComponent } from './card-view/card-view.component';
import { FooterViewComponent } from './footer-view/footer-view.component';
import { ToolbarViewComponent } from './toolbar-view/toolbar-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ButtonComponent } from './button/button.component';

import { ConfigService } from './services/client.request.service';
import { NotificationService } from './services/input.service';
import { InfoPanelViewComponent } from './info-panel-view/info-panel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    FooterViewComponent,
    ToolbarViewComponent,
    SearchViewComponent,
    UserInputComponent,
    ButtonComponent,
    InfoPanelViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ConfigService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
