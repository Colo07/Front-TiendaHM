import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() clothe:any = {}

  @Input('index')i:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    console.log("anda")
  }

}
