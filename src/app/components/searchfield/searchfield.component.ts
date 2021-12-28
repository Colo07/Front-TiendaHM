import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  search:string = ""

  constructor(private clothes:ClothesService) { }

  ngOnInit(): void {
  }

  filter($event:any){
    $event.preventDefault();
    this.clothes.filterClothes(this.search.trim());
    this.search= '';
  }



}
