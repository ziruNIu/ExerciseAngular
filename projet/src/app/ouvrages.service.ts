import { Injectable } from '@angular/core';
import { DATA } from 'src/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OuvragesService {
  getOuvrages(): Observables<Object[]>{
    const products = of(DATA);
    return products; 
  }
  constructor() { }
}
