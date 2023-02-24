import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(
    private account: AccountService){
      this.account.statusUpdated.subscribe(
        (status: string) =>alert('new status : '+ status)
      );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.account.addAccount(accountName, accountStatus);
  
  }
}
