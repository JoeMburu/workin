import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Job } from '../shared/Job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs: Job[] = [];
  private jobsUpdated = new Subject<Job[]>();

  constructor(private http: HttpClient) { }

  getJobsUpdatedListener() {
    return this.jobsUpdated.asObservable();
  }


  getJobs() {
    
     this.http.get<{message: string, jobs: any}>('http://localhost:3000/api/jobs')
      .subscribe(resultData => {
        this.jobs = resultData.jobs;
        // a copy of the retrieved jobs
        this.jobsUpdated.next([...this.jobs]);        
      });
  }
}
