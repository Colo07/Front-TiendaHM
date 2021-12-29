import { Component, OnInit, OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit, } from '@angular/core';
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
  subscription: Subscription = new Subscription();
  @ViewChild('clothes') article!: ElementRef;


  constructor(private clothesSvc:ClothesService) {
    //this.clothes=this.clothesSvc.clothes;  // el constructor se hace solamente cuando se crea el componente

    };
    // this.clothesSvc.getMug().subscribe((resp:any) => {
    //   console.log ('Respuesta del endpoint mugs desde el componente:',resp);
        // });

  ngOnInit(): void {
    this.subscription = this.clothesSvc
      .getClothes()
      .subscribe((clothes: Clothe[]) => {
        // console.log(
        //   'Respuesta del endpoint heroes desde el componente: ',
        //   heroes
        // );
        this.clothes = clothes;
  } ); }

  navigate(){
    console.log('click');
    }

    ngAfterViewInit(): void {
      // console.log('article', this.article.nativeElement);
      // this.login.log();
    }



    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
