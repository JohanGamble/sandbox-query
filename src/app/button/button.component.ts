import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NotificationService } from '../services/input.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Output() submitClick = new EventEmitter<boolean>();
  userClickedButton: boolean = true;

  constructor(private notificationService: NotificationService) {
    // Subscription needed to reset button functionality
    this.notificationService.announcementStatus$.subscribe(() => {
      // Reset to initial state
      this.userClickedButton = true;
    })
  }

  openInputField(): void {
    if (this.userClickedButton) {
      this.userClickedButton = false;
      this.submitClick.emit(true);
    } else {
      this.userClickedButton = true;
      this.submitClick.emit(false);
    }
  }
}
