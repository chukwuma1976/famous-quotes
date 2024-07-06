import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuotesComponent } from "./quotes/quotes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, QuotesComponent]
})
export class AppComponent {
  title = 'Famous-Quotes';
}
