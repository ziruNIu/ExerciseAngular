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
  subFamily?: string;
  onShow = true;
  onShowChange():void{
    this.onShow = !this.onShow
  }
  getProduct():void{
    this.libelle = "Cloison Habito® 60/36 - 2 x 1 Habito® 13 - EI45 - 32dB - M36 simples 60cm - Hte maxi 2.65m";
    this.refOuvrage = "P_A01.01.04.001.0.V20.1";
    this.group = "Cloisons sur ossatures";
    this.family = "Cloisons de distribution parements simples BA13 - BA15";
    this.subFamily = "Cloisons de distribution 60/36 THD";
    this.onShow = true;

  }

  constructor() {}
  
  ngOnInit(): void {
    this.getProduct();
  }

}
