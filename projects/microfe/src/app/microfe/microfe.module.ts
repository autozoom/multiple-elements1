import { APP_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
const appIdFactory = (): string => {
  const r = Math.round(Math.random() * 1000 * 1000 * 1000 * 1000);
  console.log('random', r);
  return 'fe-stampa-firma_' + r;
};
@NgModule({
  declarations: [ShowComponent],
  imports: [CommonModule],
  exports: [ShowComponent],
  providers: [{ provide: APP_ID, useFactory: appIdFactory }],
})
export class MicrofeModule {}
