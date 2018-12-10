import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { JobsService } from '../services/jobs.service';
import { Job } from '../shared/Job.model';

import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  loading: boolean = false;
  jobs: Job[] = [];
  private jobsSubscription: Subscription;

  constructor(private jobsService: JobsService, private router: Router) { }

  ngOnInit() {
    this.jobsService.getJobs();
    this.loading = true;
    this.jobsSubscription = this.jobsService.getJobsUpdatedListener()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;
        this.loading = false;
      });  
    
      // Initializing 
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible.popout');
        var instances = M.Collapsible.init(elems, {
          accordion: false
        });
        
      });     
     
  }

}
