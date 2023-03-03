import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent
 } from "./error-oage/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerResolver } from "./server-resolver.service";
import { CanDeactiveGuard } from "./servers/edit-server/can-deactive-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'users',
    component:UsersComponent, 
    children:[
      { path:':id/:name',component:UserComponent}
    ]
  },
  {
    path:'servers',
    canActivateChild:[AuthGuard],
    component:ServersComponent, 
    children: [
      { path:':id', component:ServerComponent, resolve:{server:ServerResolver} },
      { path:':id/edit', component:EditServerComponent, 
      canDeactivate:[CanDeactiveGuard] }
    ]
  },
  {path:'not-found', component:ErrorPageComponent,
    data: {message : "Page not found ...!!!"}
  },
  {path:'**', redirectTo:'/not-found'}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}