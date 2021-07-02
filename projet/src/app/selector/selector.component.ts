import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
​
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  
  products : any[] = [];
  
  constructor(private productService: ProductService){}
​
  ngOnInit(): void {
    this.getProducts();
  }
​
  getProducts(): void {
    this.productService.loadProducts();
    this.products=this.productService.datajson;
  }  
}