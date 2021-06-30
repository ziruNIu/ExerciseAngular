import { Injectable } from '@angular/core';
import { DATA } from 'src/data';
import { Observable, of } from 'rxjs';
​
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<any[]>{
    return of(DATA); 
  }
  getProduct(id:number): Observable<any>{
    return of(DATA[id])
  }
  // getProducts(){
  //   return DATA; 
  // }
  constructor() { }
}