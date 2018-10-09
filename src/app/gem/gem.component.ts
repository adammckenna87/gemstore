import { Component, OnInit, Input  } from '@angular/core';
import { GemModel } from '../gem-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartModel } from '../cart-model'
@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  @Input() gem: GemModel;

  @Input() cart: CartModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  addToCart(){
    this.gem.inventory = this.gem.inventory - 1;
    let targetUrl = "http://localhost:55915/api/values/" + this.gem.id;
    this.cart.totalquantity = this.cart.totalquantity + 1;
    this.httpClient.put(targetUrl, this.gem).subscribe((result) => {console.log("put finished")});
  }
}
