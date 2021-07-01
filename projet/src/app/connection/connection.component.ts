import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  isStayConnected: boolean = false;
  userName?: string;
  constructor() { }
  ngOnInit(): void {
  }

}