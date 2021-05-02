import { Component, ElementRef,  ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: [
  ]
})
export class SearcherComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

 

  constructor( private gifsService: GifsService ) {}

  search() {
    const value = this.txtSearch.nativeElement.value;
    
    if( value.trim().length === 0 ) { return;}
    this.gifsService.searchGifs( value );
    this.txtSearch.nativeElement.value = '';
  }

}
