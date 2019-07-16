import { Injectable } from '@angular/core';
import { INTERVIEW } from './interviews-mock';
import { Interview } from './interview';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor() { }

  getInterviews(): Observable<Interview[]> {
    return of(INTERVIEW);
  }
}
