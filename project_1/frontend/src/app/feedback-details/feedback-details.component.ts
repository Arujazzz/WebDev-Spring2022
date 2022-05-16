import { Component, OnInit } from '@angular/core';
import { Feedback } from '../shared/models/feedback';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../shared/services/feedback.service';
import { Input } from '@angular/core';
import { products } from '../shared/models/products';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  feedbacks: Feedback[];
  @Input() productId: number;
  createBody: string;
  updateBody: string;

  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {
    this.createBody = '';
    this.updateBody = '';
    this.feedbacks = [];
  }

  ngOnInit(): void {
    this.getFeedbacks();
    /* this.getFeedbackById(this.productId); */
  }

  getFeedbackById(id:number){
    this.feedbackService.getFeedbacks().subscribe((feedbacks) => this.feedbacks = feedbacks.filter(item => item.product === id));
  }



  getFeedbacks(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id' || '{}'));
      this.feedbackService.getFeedbackByProduct(id).subscribe((feedbacks) => {
        this.feedbacks = feedbacks;
      })
    })

  };

  deleteFeedback(id: number){
    this.feedbacks = this.feedbacks.filter((x) => x.id !== id);
    this.feedbackService.deleteFeedback(id).subscribe(() => {
      console.log(id);
    })
  }

  create(){
    const feedback = {
      body: this.createBody,
    };
    this.feedbackService.addFeedback(feedback as Feedback).subscribe((feedback) => {
      this.feedbacks.unshift(feedback);
      this.createBody = '';
      console.log('create new comment')
    })

  }


}
