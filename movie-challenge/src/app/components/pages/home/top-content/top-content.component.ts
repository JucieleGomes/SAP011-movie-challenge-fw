import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent {
@Input() genres: any[] = [];
@Input() orders: any[] = [];
}
