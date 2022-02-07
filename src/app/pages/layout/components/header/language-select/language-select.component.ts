import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css'],
})
export class LanguageSelectComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    if (lang === 'en') {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
      document.getElementsByTagName('html')[0].setAttribute('class', 'en');
    } else {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = lang;
      document.getElementsByTagName('html')[0].setAttribute('class', 'ar');
    }
  }

  ngOnInit(): void {}
}
