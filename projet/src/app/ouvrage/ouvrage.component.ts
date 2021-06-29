import { Component, OnInit } from '@angular/core';
import { OuvragesService } from '../ouvrages.service';

@Component({
  selector: 'app-ouvrage',
  templateUrl: './ouvrage.component.html',
  styleUrls: ['./ouvrage.component.css']
})
export class OuvrageComponent implements OnInit {
  Ouvrages;
  constructor(service: OuvragesService) { 
    this.Ouvrages = service.getOuvrages();
  }

  ngOnInit(): void {
  }

}
