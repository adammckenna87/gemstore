import { Component, OnInit, Input  } from '@angular/core';
import { GemModel } from '../gem-model';

import { CartModel } from '../cart-model'
@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  @Input() gem: GemModel;

  @Input() cart: CartModel;


  addToCart(){
    this.gem.inventory = this.gem.inventory - 1;

    this.cart.totalquantity = this.cart.totalquantity + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
