import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
// import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService) {
    
  }
  onSetTo(status: string) {
    this.accountService.update(this.id, status);
    this.accountService.statusUpdated.emit(status);  
  }
}
