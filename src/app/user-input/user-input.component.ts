import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.sass']
})
export class UserInputComponent {
  @Output() submittedInput = new EventEmitter<string>();
  generalArr: any[] = [];
  userInput: string = "";

  OnInput(ev: any): void {
    this.userInput = ev.target.value;
    this.submittedInput.emit(this.userInput);
  }
}