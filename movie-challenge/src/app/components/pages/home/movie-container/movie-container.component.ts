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
queryParams: string = '';

constructor() { }
ngOnChanges(changes: SimpleChanges): void {
  console.log({ a: this.genres, b: this.order });
  if (this.order || this.genres) {
    //adiciona o genero e ordem esclhido a URL
    this.queryParams = `\?order=${this.order}${this.genres !== undefined ? `&genre=${this.genres}` : ``}`
    console.log('Query Params:', this.queryParams);
  }
}
}
