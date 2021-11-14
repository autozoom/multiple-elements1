import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ShowComponent } from 'projects/microfe/src/app/microfe/show/show.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private _injector: Injector) {
    console.log('Elements AppModule constructor');
  }

  ngDoBootstrap() {
    const element1 = createCustomElement(ShowComponent, {
      injector: this._injector,
    });
    customElements.define('show-root', element1);
  }
}
