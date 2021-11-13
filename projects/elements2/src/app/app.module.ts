import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'projects/microfe2/src/app/app.component';
import { AppModule as AppModule2 } from 'projects/microfe2/src/app/app.module';

@NgModule({
  imports: [BrowserModule, AppModule2],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const element1 = createCustomElement(AppComponent, {
      injector: this._injector,
    });
    customElements.define('app-root-2', element1);
  }
}
