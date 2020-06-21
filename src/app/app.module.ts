import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PermissionsModule } from 'projects/permissions/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PermissionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
