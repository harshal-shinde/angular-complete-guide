import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactive-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverId = 1;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  canSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams : Params): void => {
        this.allowEdit = queryParams['allowEdit'] ==='1' ? true: false; 
      }
    );
    this.route.fragment.subscribe();
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(parseInt(id));
    // this.route.params.subscribe(
    //   (params: Params)=> {
    //     this.serverId = params['id'];
    //     this.serverName = params['name'];
    //     this.serverStatus = params['status'];
    // })
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, 
      { name: this.serverName, status: this.serverStatus }
    );
    this.canSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route})
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowEdit) return true;
    if(this.serverName !== this.server.name || 
      this.serverStatus !== this.server.status && !this.canSaved){
        return confirm('Do you wan to discard the changes');
      }else {
        return true;
      }
  }
}
