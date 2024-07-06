import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../app/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotesURL = 'https://dummyjson.com/quotes?limit=0';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(this.quotesURL);
  }
}
