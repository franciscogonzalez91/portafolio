import { Component, OnInit } from '@angular/core';
import { jobsJson } from '../../../../jsonDB/jobs'
import {Job} from '../../../models/job.model';


@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit{
  jobs: Job[] = [];

  ngOnInit(){
    this.jobs = jobsJson.jobs_ES; 
  }
}
