import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverStatus = "Server is not created";
  serverName:string;
  displayName = false;
  serverList = ['Server1','Server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
  }
  onServerCreation() {
    this.displayName = true;
    this.serverList.push(this.serverName);
    this.serverStatus = "Server is created and Name of Server is " + this.serverName;
  }
  onSeverNameChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}