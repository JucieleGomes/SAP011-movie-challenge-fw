import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieDetailsComponent } from './components/pages/movie-details/movie-details.component';
import { HeaderComponent } from './components/common-components/header/header.component';
import { FooterComponent } from './components/common-components/footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './components/pages/pages.component';
import { CommonComponentsComponent } from './components/common-components/common-components.component';
import { HttpClientModule} from '@angular/common/http';
import { MoviesDataBaseService } from './services/movies-data-base.service';
import { MovieContainerComponent } from './components/pages/home/movie-container/movie-container.component';
import { TopContentComponent } from './components/pages/home/top-content/top-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    PagesComponent,
    CommonComponentsComponent,
    MovieContainerComponent,
    TopContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MoviesDataBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
