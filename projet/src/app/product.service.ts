import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DATA } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(id:Number): Observable
}
