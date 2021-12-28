import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
@Component({
  selector: 'app-cardsfiltered',
  templateUrl: './cardsfiltered.component.html',
  styleUrls: ['./cardsfiltered.component.scss']
})
export class CardsfilteredComponent implements OnInit {

  clothes: any[] = [];

  constructor(private clothesSvc:ClothesService) {

  }

  ngOnInit(): void {
    setTimeout(()=> {this.clothes=this.clothesSvc.filtered;},1500)
  }


}
