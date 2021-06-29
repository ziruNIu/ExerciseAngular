import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  refOuvrage?: string;
  libelle?: string;
  group?: string;
  family?: string;
  subfamily?: string;
  onShow = false;
  onShowchange():void{
    this.onShow = !this.onShow
  }

  constructor() { }

  ngOnInit(): void {
  }

}
