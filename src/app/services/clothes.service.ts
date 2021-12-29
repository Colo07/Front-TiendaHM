import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Clothe, Clothes } from '../models/api-models';
@Injectable({
  providedIn: 'root'  //Inyectable que va en el route de la app 
})

export class ClothesService {
   initialClothes: Clothe[] = [
     { //hoodies
      _id: '61cbf4f9c04241951df8511d',
      id:'1',
      name:"HolaMundo",
      type: ["Pullover","Zip"],
      color: ["Red, Black"],
      size: ["S","M","L"],
      price: "$47,99",
      imgF:"https://drive.google.com/uc?export=view&id=1jyTxoyb4RZFWEGwnpOOiXCnebcnuT9VC",
      imgB:"https://drive.google.com/uc?export=view&id=1ssEaQo1KUKtPNBNcDoxmuz1Uy02ZAP1t",
   },
  
   {
    _id: '61ba803ca31fe3e28b620928',
    id:'2',
    name:"HappyCoding",
    type: ["Zip","Pullover"],
    color: ["Navy","Black"],
    size: ["S","M","L"],
    price: "$45,99",
    imgF:"https://drive.google.com/uc?export=view&id=1jyTxoyb4RZFWEGwnpOOiXCnebcnuT9VC",
    imgB:"https://drive.google.com/uc?export=view&id=1ssEaQo1KUKtPNBNcDoxmuz1Uy02ZAP1t",
   },
  
   { // tshirts
    _id: '61ba82c4a31fe3e28b645edd',
    id:'3',
    name:"HolaMundo",
    type:["Tshirt"],
    color: ["Purple","Black"],
    size: ["S","M","L"],
    price: "$25,99",
    imgF:"https://drive.google.com/uc?export=view&id=1Io6g0qmN0QhEAC8qjP6wxUpLNh2KK9qg",
    imgB:"https://drive.google.com/uc?export=view&id=1SL68tevGmL7cKfvbsK0H98akX_gUit-U"
 },

 {
    _id: '61ba82c4a31fe3e28b645ede',
    id:'4',
    name:"T-shirt HappyCoding",
    type:["Tshirt"],
    color: ["Purple","Black"],
    size: ["S","M","L"],
    price: "$26,99",
    imgF:"https://drive.google.com/uc?export=view&id=1XGuFFtEQHcliARTajZlGPD5Exk3Cycn1",
    imgB:"https://drive.google.com/uc?export=view&id=162Lec6bXvsSBSxLJpX-rurgJ-LYywEO9"
 },
 { //mug
    _id: '61ba8338a31fe3e28b64c58b', 
    id:'5',
    name:"CoddingWorld",
    type:["Tshirt"],
    color: ["Dark Grey","Black"],
    size: ["11oz"],
    price: "$14,99",
    imgF: "https://drive.google.com/uc?export=view&id=1VnJpn1QVPPZTrtL37LnPNCtY-9RoPsa9",
    imgB: "https://drive.google.com/uc?export=view&id=1Gf7XD7jFFkhhThpDmQIB4SFyFFLmNz1K"
 }
   ];
  
  constructor(private http: HttpClient) {
    this.getClothes();

  }
  
  
  clothes$: BehaviorSubject<Clothe[]>= new BehaviorSubject(this.initialClothes);


  getClothes(): Observable<Clothe[]> {
    return this.clothes$.asObservable();
  }

  getClothesSvc() {
    return this.http
    .get<Clothes>(`${environment.baseUrl}clothes`)
    .subscribe((response) => {
      console.log(response);
      this.clothes$.next(response.data as Clothe[]);
    });
  }

  filterClothes(text:string) {

 const filteredClothes= this.clothes$.value.filter((clothe) => clothe.name.toLowerCase().includes(text.toLowerCase()));
  
 this.clothes$.next(filteredClothes) ;
  
 } 

 getClothe(id:number){
   return this.initialClothes[id];
 }

 resetClothes () {
   this.getClothesSvc();
 }

 
} 

