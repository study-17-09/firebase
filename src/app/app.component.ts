import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('ru');
  }

  get getLocaledLogin(): Observable<string> {
    return this.translateService.get('login.title');
    // return this.translateService.instant('login.title');
  }

  switchLang(lang: string): void {
    this.translateService.use(lang);
  }
}
