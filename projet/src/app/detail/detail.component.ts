import { ProductService } from './../product.service';
import { ProductComponent } from './../product/product.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  onShow = true;
  products: any[] = [];
  id : number = 0;

  onShowChange():void{
    this.onShow = !this.onShow
  }

  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
    this.route.paramMap
      .subscribe(params => {
        this.id = Number(params.get('id') as string) - 1;
      });
  }

}
