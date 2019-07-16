import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    InterviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
