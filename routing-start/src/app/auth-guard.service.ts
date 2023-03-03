import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, 
  CanActivateChild, 
  Router, 
  RouterStateSnapshot, UrlTree } from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "./auth-service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService : AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean 
  | UrlTree> | Promise<boolean | UrlTree> {
      return this.authService.authenticated()
      .then((authenticated:boolean)=> {
        if(authenticated) return true;
        this.router.navigate(['/'])
      });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute, state)
  }
}