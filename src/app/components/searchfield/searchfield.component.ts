import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  search:string = "";
  clear:boolean=false;
  url:string = '';

  constructor(private clothes:ClothesService, private router:Router) { 
    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        // event = new NavigationEnd();
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  filter($event:any){
    $event.preventDefault();
    console.log(this.url);
    if (this.url === '/home') {
      this.clothes.filterClothes(this.search.trim());
      this.search = '';
      this.clear = true;
    } else {
      this.clothes.filterClothes(this.search.trim());
      this.search = '';
      this.clear = true;
      this.router.navigate(['/home']);
    }
  }

  onClear(){
    this.clothes.resetClothes();
    this.clear = false;
  }


}
