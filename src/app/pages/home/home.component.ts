import {Component, OnInit} from '@angular/core';

declare var cookieconsent: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
    ngOnInit(): void {
      document.addEventListener('DOMContentLoaded', function () {
        cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#237afc",
              "text": "#ffffff"
            },
            "button": {
              "background": "#fff",
              "text": "#237afc"
            }
          },
          "theme": "classic",
          "content": {
            "message": "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Website erhalten.",
            "dismiss": "Verstanden!",
            "link": "Erfahre mehr",
            "href": "https://www.example.com/privacy-policy"
          }
        });
      });
    }

}
