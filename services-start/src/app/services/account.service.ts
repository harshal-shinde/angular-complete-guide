import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
  
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private log: LoggingService){}

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.log.logStatusMessage(status)
  }

  update(id: number, newStatus: string) {
    this.accounts[id].status =newStatus;
    this.log.logStatusMessage(newStatus);
  }
}
