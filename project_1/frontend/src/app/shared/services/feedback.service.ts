import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../models/feedback';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  option = new HttpHeaders({'Content-Type': 'application/json'});

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.BASE_URL}/api/feedbacks`);
  }

  getFeedbackByProduct(product_id: number): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.BASE_URL}/api/products/${product_id}/feedbacks`)
  }

  addFeedback(feedback: Feedback): Observable<Feedback>{

    return this.http.post<Feedback>(`${this.BASE_URL}/api/feedbacks/`, feedback)
  }

  updateFeedback(feedback: {body: string; product_id: number}): Observable<Feedback>{
    //@ts-ignore
    return this.http.put<Feedback>(`${this.BASE_URL}/api/feedbacks/${id}`, feedback, this.option)
  }

  deleteFeedback(id: number): Observable<Feedback>{

    return this.http.delete<Feedback>(`${this.BASE_URL}/api/feedbacks/${id}`)
  }



}
