import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  clothes: any[] = [];

  constructor(private clothesSvc:ClothesService) {
    this.clothes=this.clothesSvc.clothes;  // el constructor se hace solamente cuando se crea el componente
   }

  ngOnInit(): void {
  }

}

