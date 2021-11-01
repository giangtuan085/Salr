import { Injectable } from '@angular/core';
import { DefaultLangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { MenuRoute } from '../../models/menu-route';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public translations: any;
  private menuDataSource = new BehaviorSubject<MenuRoute[]>([]);
  public menuItems = this.menuDataSource.asObservable();

  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');
  }

  public getTranslation(): void {
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.translations = event.translations;
      const routes: MenuRoute[] = [
        {
          path: '/',
          title: this.translations.MENU.HOME
        },
        {
          path: '/work',
          title: this.translations.MENU.WORK
        },
        {
          path: '/dev',
          title: this.translations.MENU.DEV
        },
        {
          path: '/music',
          title: this.translations.MENU.MUSIC
        },
        {
          path: '/contact',
          title: this.translations.MENU.CONTACT
        },
      ];

      this.menuDataSource.next(routes);
    });
  }
}
