import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	// selector: '[app-servers]', //this will be work like an attribute/props i.e. <div app-servers></div>
	// selector: '.app-servers', //this will be work like a class name to the element i.e. <div class='app-servers'></div>
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = ''
	serverCreated = false;
	servers: Array<string> = [];

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit(): void {
	}

	onCreateSever() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created -' + this.serverName;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}

}
