import { Injectable } from '@angular/core';
import { DefaultLangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuRoute } from '../../models/menu-route';
import { UserRole } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public translations: any;
  public menuItems: MenuRoute[] = [];

  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');
  }

  public getTranslation(): void {
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.translations = event.translations;
      this.menuItems = [
        {
          path: 'upload',
          title: this.translations.MENU.UPLOAD,
          class: '',
          role: UserRole.Upload,
        },
        {
          path: 'review',
          title: this.translations.MENU.REVIEW,
          class: '',
          role: UserRole.Reviewer,
        },
        {
          path: 'admin',
          title: this.translations.MENU.DOWNLOAD,
          class: '',
          role: UserRole.Reviewer,
        },
      ];
    });
  }
}
