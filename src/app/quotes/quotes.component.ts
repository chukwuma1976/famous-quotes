import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuotesService } from '../../service/quotes.service';
import { Quote } from '../quote';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit {
  fullListOfQuotes?: Quote[];
  quotes?: Quote[];
  dropDownByAuthor: string[] = [];
  filterValue: string = '';

  constructor(private quotesService: QuotesService){}

  onSelect(event: Event){
    this.filterValue = (event.target as HTMLSelectElement).value;
    this.quotes = this.fullListOfQuotes?.filter((quote: Quote) => quote.author.includes(this.filterValue));
  }

  ngOnInit(){
    this.quotesService.getQuotes().subscribe((data: any) => this.fullListOfQuotes = data.quotes);
    this.fullListOfQuotes?.forEach((quote: Quote)=>{
      if (!this.dropDownByAuthor.includes(quote.author)) this.dropDownByAuthor.push(quote.author)
    })
    this.dropDownByAuthor.sort();
  }

}
