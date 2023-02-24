import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
  constructor(private userService : UserService, 
    private counterService: CounterService){
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.activerUserCount.emit(this.userService.activeUsers.length)
    
  }
}
