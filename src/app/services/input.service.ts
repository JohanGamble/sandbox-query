import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// Should be an external function and not a service
@Injectable()
export class NotificationService {
    private notifySubscribers = new Subject<string>()

    announcementStatus$ = this.notifySubscribers.asObservable();
    
    announcementMade(value: string): void {
        this.notifySubscribers.next(value);
    }
}