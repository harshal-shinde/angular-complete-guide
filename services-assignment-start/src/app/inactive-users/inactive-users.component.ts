import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  
  constructor(private userService:UserService, 
    private counterService:CounterService) {

  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.counterService.inactiverUserCount.emit(this.userService.inactiveUsers.length)
  }
}
