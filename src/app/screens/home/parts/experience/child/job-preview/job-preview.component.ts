import { Component, Input, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/core/models/job-experience';

@Component({
  selector: 'app-job-preview',
  templateUrl: './job-preview.component.html',
  styleUrls: ['./job-preview.component.scss']
})
export class JobPreviewComponent implements OnInit {
  @Input() content!: JobExperience;

  constructor() { }

  ngOnInit(): void {
  }

}
