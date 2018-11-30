import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {NodeDetailsComponent} from './node-details/node-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NeighboursTableComponent} from './neighbours-table/neighbours-table.component';
import {AppComponentService} from './app-component.service';
import {AppComponentResolver} from './app-component.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NodeDetailsComponent,
    NeighboursTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,

    HttpClientModule
  ],
  exports: [
    SearchComponent,
    NodeDetailsComponent,
    NeighboursTableComponent
  ],
  providers: [AppComponentService,
    AppComponentResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
