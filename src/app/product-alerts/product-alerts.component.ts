import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
    this.notify.emit(this.count);
  }
  decrement() {
    this.count--;
    this.notify.emit(this.count);
  }
}