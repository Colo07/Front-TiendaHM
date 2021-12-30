import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  clothe:any;

  constructor(private activatedRoute: ActivatedRoute, private clothesSvc: ClothesService) { 
    this.activatedRoute.params.subscribe( params => {
      const clothe = this.clothesSvc.getClothe(params['id']);
      this.clothe = {
        name: clothe.name,
        color: clothe.color,
        size: clothe.size,
        price: clothe.price,
        type: clothe.type,
        imgF: clothe.imgF,
        imgB: clothe.imgB
    }
  }); }

  ngOnInit(): void{}
  // onReset() {
  //   this.clothesSvc.resetClothes();
  // }
}
