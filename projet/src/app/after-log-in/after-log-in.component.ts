import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-after-log-in',
  templateUrl: './after-log-in.component.html',
  styleUrls: ['./after-log-in.component.css']
})
export class AfterLogInComponent implements OnInit {
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
