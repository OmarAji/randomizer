import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {CardsComponent} from "../../components/cards/cards.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.checkCookie();
  }

  ngAfterViewInit(): void {
    const acceptCookiesBtn = document.getElementById("accept-cookies");
    if (acceptCookiesBtn) {
      acceptCookiesBtn.addEventListener("click", this.acceptCookies.bind(this));
    }
  }

  setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  getCookie(cname: string): string {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }

  checkCookie(): void {
    const cookieConsent = this.getCookie("cookieConsent");
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner && cookieConsent == "") {
      cookieBanner.style.display = "block";
    }
  }

  acceptCookies(): void {
    this.setCookie("cookieConsent", "true", 365);
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
  }

}
