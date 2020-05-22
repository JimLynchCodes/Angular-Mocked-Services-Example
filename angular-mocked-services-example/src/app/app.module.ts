import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooCompComponent } from './foo-comp/foo-comp.component';
import { FoobservableCompComponent } from './foobservable-comp/foobservable-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FooCompComponent,
    FoobservableCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
