import { Component, OnInit } from '@angular/core';
import { JobExperiences } from 'src/app/core/constants/constants';
import { JobExperience } from 'src/app/core/models/job-experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobExperiences!: JobExperience[];

  constructor() {
    this.jobExperiences = JobExperiences;
  }

  ngOnInit(): void {
  }

}
