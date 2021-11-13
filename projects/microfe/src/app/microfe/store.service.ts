import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}
  db = '';

  setValue(s: string) {
    this.db = s;
  }

  getValue() {
    return this.db;
  }
}
