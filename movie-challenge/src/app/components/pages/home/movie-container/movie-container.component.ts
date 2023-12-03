import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnChanges{
  //aqui o movie-container recebe movies do componente pai
  // a home para poder usar em seu escopo
@Input() movies: any []=[];
// @Input() gender: any[] = [];
@Input() genres: string | undefined = '';
@Input() order: string | undefined = '';
@Input() pageNumber: string | undefined = '';
queryParams: any = {};

constructor() { }
ngOnChanges(changes: SimpleChanges): void {
  if (this.order || this.genres) {
    this.queryParams = {
      order: this.order,
      genres: this.genres,
      pageNumber: this.pageNumber
    }
  }
}
}
