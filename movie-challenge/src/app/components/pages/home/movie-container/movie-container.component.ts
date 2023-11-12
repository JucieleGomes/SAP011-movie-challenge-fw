import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent {
  //aqui o movie-container recebe movies do componente pai
  // a home para poder usar em seu escopo
@Input() movies: any []=[];
}
