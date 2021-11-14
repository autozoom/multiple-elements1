import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  // providers: [StoreService],
})
export class ShowComponent implements OnInit {
  @Input() valore!: number;

  constructor(private _service: StoreService) {
    console.log('ShowComponent constructor');
  }

  ngOnInit(): void {
    this._service.setValue('valore' + this.valore);
  }

  read() {
    return this._service.getValue();
  }
}
