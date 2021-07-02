import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product:any;
  refOuvrage: string = "";
  libelle: string = "";
  group: string = "";
  family: string= "";
  subFamily: string = "";
  image: string = "";
  onShowAssociateDocuments = true;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}
  
  onShowAssociateDocumentsChange():void{
    this.onShowAssociateDocuments = !this.onShowAssociateDocuments;
  }

  getProduct():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.loadProducts();
    this.product = this.productService.getProduct(id - 1);
    this.libelle = this.product.name;
    // this.libelle = "Cloison Habito® 60/36 - 2 x 1 Habito® 13 - EI45 - 32dB - M36 simples 60cm - Hte maxi 2.65m";
    this.refOuvrage = this.product.BIMid;
    this.group = this.product.group;
    this.family = this.product.category;
    this.subFamily = this.product.subcategory;
    this.onShowAssociateDocuments = true;
    this.image = "https://gaia.fantasiapp.tech/" + this.product.photoUrl;
  }

 
  
  ngOnInit(): void {
    this.getProduct();
  }

}
