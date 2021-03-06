import { Component } from '@angular/core';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salr';

  constructor(private lang: LanguageService) {
    lang.getTranslation();
  }

}
