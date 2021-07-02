import { Injectable } from '@angular/core';
import {DATA}  from 'src/data';
import { Observable, of } from 'rxjs';
​
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  datajson: any = {};
  constructor() {
   }

  private fetchProducts(): Observable<any[]>{
    return of(DATA);
  }

  loadProducts() : void{
    this.fetchProducts().subscribe(data => this.datajson = data)
  }

  getProduct(id:number): any{
    return this.datajson[id]
  }
  getProductProperty(id:number, property:string): string{
    return this.datajson[id] && this.datajson[id][property]
  }
 
}