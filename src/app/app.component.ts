import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dir!: Direction;
  currLang = localStorage.getItem('currLang');
  browserLang: any;
  title = 'loyal-friends';
  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');
    if (this.currLang !== null && this.currLang !== undefined) {
      this.translate.use(this.currLang);
      let x = this.currLang === 'ar' ? 'rtl' : 'ltr';
      document
        .getElementsByTagName('html')[0]
        .setAttribute('lang', this.currLang);
      if (this.currLang === 'en') {
        document.documentElement.dir = x;
        document.documentElement.lang = this.currLang;
        document.getElementsByTagName('html')[0].setAttribute('class', 'en');
      } else {
        document.documentElement.dir = x;
        document.documentElement.lang = this.currLang;
        document.getElementsByTagName('html')[0].setAttribute('class', 'ar');
      }
    } else {
      this.browserLang = this.translate.getBrowserLang();
      this.translate.use(this.browserLang);
    }
  }
}
