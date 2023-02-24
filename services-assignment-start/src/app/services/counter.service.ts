import { EventEmitter, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable()
export class CounterService {

  constructor(private userService : UserService) {
  }

  inactiverUserCount = new EventEmitter<number>();
  activerUserCount = new EventEmitter<number>();

  // getInactiveUserCount() {
  //   return 
  // }
}