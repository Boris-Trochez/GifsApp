import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearcherComponent } from './searcher/searcher.component' ;
import { ResultsComponent } from './results/results.component';

import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearcherComponent,
    ResultsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
