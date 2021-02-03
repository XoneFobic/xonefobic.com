import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { httpTranslateLoader } from './httpTranslateLoader';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpTranslateLoader),
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
