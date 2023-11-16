import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {
  @Output() getSelectedGenerEmitter: EventEmitter<string> = new EventEmitter<string>();
  // @Output() getMorePopularyEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() genres: any[] = [];
  @Input() orders: any[] = [];
  @ViewChild("filter") filter!: ElementRef;
  // @ViewChild("morePopulary") morePopulary!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  getSelectedGener(event: any) {
    console.log(event);
    this.getSelectedGenerEmitter.emit(event.target.value);
  }

  // getMorePopulary(event: any) {
  //   console.log(event); 
  //   this.getMorePopularyEmitter.emit(event.target.value);
  // }
}
