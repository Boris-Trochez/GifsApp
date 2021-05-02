import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interfaces/gifs-interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string = 'dKxDoZWtIMyGLiTeUIkAwJDtVus9FOCr';
  private _urlService = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = []; 
  public results: Gif[] = [];

  get history(): string[] {
    return [...this._history];
  }

 

  constructor( private http: HttpClient ) { 
    this._history = JSON.parse(localStorage.getItem('History')!) || [];
    this.results = JSON.parse(localStorage.getItem('Results')) || [];
  }

  searchGifs( query: string = ''): void {
    query = query.trim().toLocaleLowerCase();
   
    if (!this._history.includes( query )) { 
      this._history.unshift( query );
      this._history = this._history.splice(0, 10);
      localStorage.setItem('History', JSON.stringify(this._history));  
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', `${10}`)
      .set('q', query);
    
    this.http.get<SearchGifsResponse>(`${ this._urlService }/search`, { params })
    .subscribe( (response ) => {
        this.results = response.data;
        localStorage.setItem('Results', JSON.stringify(this.results));
      }
    );
  }

  
}
