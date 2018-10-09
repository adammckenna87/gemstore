import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import {ReviewModel} from '../review-model';
import { Md5 } from 'ts-md5/dist/md5';
import { AvatarService} from '../avatar.service'
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class reviewsComponent implements OnInit {
@Input()
gem: GemModel;
newReview: ReviewModel;

  constructor(private avatarservice: AvatarService) { }

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
submitClicked(reviewForm){
  this.gem.reviews.push(this.newReview);
  reviewForm.reset();
  this.ngOnInit();
}
}
