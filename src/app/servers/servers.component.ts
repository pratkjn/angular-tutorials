import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //this will be work like an attribute/props i.e. <div app-servers></div>
  // selector: '.app-servers', //this will be work like a class name to the element i.e. <div class='app-servers'></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
