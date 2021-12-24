import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  clothes: any[] = [
    { //hoodies
      "id":"1",
      "name":"Hoodie HolaMundo",
      "type": ["Pullover","Zip"],
      "color": ["Red","Black"],
      "size": ["S","M","L"],
      "price": "$47,99",
      "imgF":"/assets/img/buzo-HM-F.jpg",
      "imgB":"/assets/img/buzo-HM-B.jpg"
  },
  
  {
      "id":"2",
      "name":"Hoodie HappyCoding",
      "type": ["Zip","Pullover"],
      "color": ["Navy","Black"],
      "size": ["S","M","L"],
      "price": "$45,99",
      "imgF":"/assets/img/buzo-HC-F.jpg",
      "imgB":"/assets/img/buzo-HC-B.jpg"
  },
  { // tshirts
    "id":"3",
    "name":" T-shirt HolaMundo",
    "color": ["Purple","Black"],
    "size": ["S","M","L"],
    "price": "$25,99",
    "imgF":"/assets/img/remera-HM-F.jpg",
    "imgB":"/assets/img/remera-HM-B.jpg"
},

{
    "id":"4",
    "name":"T-shirt HappyCoding",
    "color": ["Purple","Black"],
    "size": ["S","M","L"],
    "price": "$26,99",
    "imgF":"/assets/img/remera-HC-F.jpg",
    "imgB":"/assets/img/remera-Hc-B.jpg"
},
{ //mug
  "id":"5",
  "name":"Mug CoddingWorld",
  "color": ["Dark Grey","Black"],
  "size": "11oz",
  "price": "$14,99",
  "imgF": "/assets/img/tazaF.jpg",
  "imgB": "/assets/img/tazaB.jpg"
}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  navigate() {
    console.log("anda")
  }

}

