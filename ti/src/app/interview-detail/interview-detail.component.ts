import { Component, OnInit, Input } from '@angular/core';
import { Interview } from '../interview';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.less']
})
export class InterviewDetailComponent implements OnInit {

  @Input() interview: Interview;
  constructor() { }

  ngOnInit() {
  }

}
