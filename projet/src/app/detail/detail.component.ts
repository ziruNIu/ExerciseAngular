import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

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
  image?: string;
  onShow = true;
  onShowChange():void{
    this.onShow = !this.onShow
  }
  getProduct():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.libelle = "Cloison Habito® 60/36 - 2 x 1 Habito® 13 - EI45 - 32dB - M36 simples 60cm - Hte maxi 2.65m";
    this.refOuvrage = "P_A01.01.04.001.0.V20.1";
    this.group = "Cloisons sur ossatures";
    this.family = "Cloisons de distribution parements simples BA13 - BA15";
    this.subFamily = "Cloisons de distribution 60/36 THD";
    this.onShow = true;
    this.image = "https://gaia.fantasiapp.tech/resources/images/Visuels_Systemes/Placo/7E3626CAEE464DD5A1C169DB2DE30A5D_72-48.png";
    console.log(id)
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: ProductService,
  ) {}
  
  ngOnInit(): void {
    this.getProduct();
  }

}
