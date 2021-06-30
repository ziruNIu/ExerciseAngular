import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() libelle ?: string;
  @Input() image ?: string;
  @Input() price ?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
