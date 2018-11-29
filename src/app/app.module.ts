import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

    HttpClientModule
  ],
  exports: [
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
