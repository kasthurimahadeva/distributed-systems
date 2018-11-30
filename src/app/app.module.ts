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
import {FilesComponent} from './files/files.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NodeDetailsComponent,
    NeighboursTableComponent,
    FilesComponent,
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
    FlexLayoutModule,

    HttpClientModule
  ],
  exports: [
    SearchComponent,
    NodeDetailsComponent,
    NeighboursTableComponent,
    FilesComponent
  ],
  providers: [AppComponentService,
    AppComponentResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
