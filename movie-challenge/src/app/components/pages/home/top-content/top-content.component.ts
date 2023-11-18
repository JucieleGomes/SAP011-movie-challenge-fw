import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {
  @Output() getSelectedGenerEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() getSelectedOrderEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() genres: any[] = [];
  @ViewChild("filter") filter!: ElementRef;
  @ViewChild("order") order!: ElementRef;

  orderList: any[] = [
    {
      order: "popularity.desc",
      name: "Mais populares",
    },

    {
      order: "popularity.asc",
      name: "Menos populares",
    },

    { order: "primary_release_date.asc",
      name: "Menos recentes", 
    },

    {
      order: "primary_release_date.desc",
      name: "Mais recentes",
    }
  ]

  constructor() {}

  ngOnInit(): void {}

  getSelectedGener(event: any) {
    console.log("genero:", event);
    this.getSelectedGenerEmitter.emit(event.target.value);
  }

  getSelectedOrder(event: any) {
   this.getSelectedOrderEmitter.emit(event.target.value); 
   console.log("EVENTO GET SELECTED ORDER TOP",event.target.value);
   
  }
}