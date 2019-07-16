import { Component, OnInit } from '@angular/core';
import { Interview } from '../interview';
import { INTERVIEW } from '../interviews-mock';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.less']
})
export class InterviewComponent implements OnInit {
  interviews: Interview[];
  selectedInterview: Interview;

  constructor(private interviewService: InterviewService) {}

  ngOnInit() {
    this.fetchHeroes();
  }

  onSelect(interview: Interview): void {
    this.selectedInterview = interview;
  }

  fetchHeroes(): void {
    this.interviewService
      .getInterviews()
      .subscribe(interviews => (this.interviews = interviews));
  }
}
