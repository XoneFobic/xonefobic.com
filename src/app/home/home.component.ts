import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  public constructor (public translate: TranslateService) { }

  public switchLang (lang: string): void {
    this.translate.use(lang);
  }
}
