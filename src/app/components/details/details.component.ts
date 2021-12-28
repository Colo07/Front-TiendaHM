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
    this.activatedRoute.params.subscribe((params) => {
      this.clothe = this.clothesSvc.getClothes(params['id']);
      console.log(this.clothe);
    });
  }

  ngOnInit(): void {
  }

}
