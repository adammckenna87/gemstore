import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import {ReviewModel} from '../review-model'
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class reviewsComponent implements OnInit {
@Input()
gem: GemModel;
newReview: ReviewModel;

  constructor() { }

  ngOnInit() {
    this.wipeReview();
    }
    wipeReview(){
      this.newReview ={
        id: -1,
        createddate: "",
        body: "",
        rating: 5,
        author: ""
    }
  }
submitClicked(){
  this.gem.reviews.push(this.newReview);
  this.ngOnInit();
}
}
