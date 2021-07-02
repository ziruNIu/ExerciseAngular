import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class main implements OnInit {
  userName: any; //????
  constructor(
    private route: ActivatedRoute,
  ) { }
  getUserName(): void{
    this.userName = this.route.snapshot.paramMap.get('userName')
    console.log(this.userName)
  }
  ngOnInit(): void {
    this.getUserName()
  }

}
