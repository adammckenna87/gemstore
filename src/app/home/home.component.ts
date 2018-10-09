import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import {CartItemModel} from '../cart-item-model';
import {CartModel} from '../cart-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Input()
cart: CartModel;

  homeGems : GemModel[] = [{
    fullImagePath: 'assets/gem-01.gif',
    id: 1,
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their' +
    ' lustre, beyond their shine... Dodecahedron is one of those gems',
    inventory: 10,
    colors: ["red", "blue", "green"],
    reviews: [{
      id: 1,
      createddate: 'Tuesday',
      author: 'joe@codingtemple.com',
      rating: 5,
      body: 'I love this product!'        },
             {
               id: 2,
               createddate: 'Wednesday',
               author: 'ripalp@codingtemple.com',
               rating: 1,
               body: 'I hate this product'         }]

  },
  {
    id: 2,
    name: 'Pentagonal',
    price: 5.95,
    description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
    fullImagePath: './assets/gem-03.gif',
    inventory: 10,
    colors: ["red", "blue", "green"],
    reviews: []

  },
{
  id: 3,
  name: 'Hexagonal',
  price: 12.95,
  description: 'The hexagonal gem is one of our best sellers',
  fullImagePath: './assets/gem-02.gif',
  inventory: 10,
  colors: ["red", "blue", "green"],
  reviews: []

}]
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
/*
    console.log(JSON.stringify(this.homeGems));
    this.httpClient.get('/assets/gems.json');
*/
this.httpClient.get('http://localhost:55915/api/values').subscribe((data: GemModel[]) => {
          this.homeGems = data;
      });
  }

}
