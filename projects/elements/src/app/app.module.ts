import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MicrofeModule } from 'projects/microfe/src/app/microfe/microfe.module';
import { ShowComponent } from 'projects/microfe/src/app/microfe/show/show.component';

@NgModule({
  imports: [BrowserModule, MicrofeModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const element1 = createCustomElement(ShowComponent, {
      injector: this._injector,
    });
    customElements.define('show-root', element1);
    const element2 = createCustomElement(ShowComponent, {
      injector: this._injector,
    });
    customElements.define('show-root-2', element2);
  }
}
