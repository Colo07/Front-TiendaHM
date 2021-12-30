import { Component, OnInit } from '@angular/core';
import { Clothe } from 'src/app/models/api-models';
import { ClothesService} from 'src/app/services/clothes.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})




export class CardsComponent implements OnInit {

  clothes: Clothe[] = [];

  constructor(private clothesSvc:ClothesService) {
    this.clothesSvc.getClothes().subscribe((resp)=> {
      console.log("Respuesta del endpoint desde el componente: ", resp);
      this.clothes = resp;
    });
    }

  ngOnInit(): void {}

  navigate(){
    console.log('click');
    }

    ngAfterViewInit(): void {
      // console.log('article', this.article.nativeElement);
      // this.login.log();
    }

}
