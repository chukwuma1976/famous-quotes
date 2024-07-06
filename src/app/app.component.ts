import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuotesComponent } from "./quotes/quotes.component";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, QuotesComponent, HttpClientInMemoryWebApiModule]
})
export class AppComponent {
  title = 'Famous Quotes';
}
