import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MicrofeModule } from './microfe/microfe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MicrofeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
