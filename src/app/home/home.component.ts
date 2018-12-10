import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';

// import { JobsService } from '../services/jobs.service';
// import { Job } from '../shared/Job.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoClipPath: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.videoClipPath = '../../assets/videos/goomalling-storm.mp4';
  }

  

}
