import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    alert('Message send succesfully')

}}
