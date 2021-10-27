import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @ViewChild('navbar') navbar?: ElementRef;
  private initialHeaderOffset!: number;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  public onScrollingEvent(): void {
    if (this.navbar?.nativeElement.offsetTop > 0) {
      this.initialHeaderOffset = this.navbar?.nativeElement.offsetTop;
    }

    if ((window as any).pageYOffset >= this.initialHeaderOffset) {
      this.navbar?.nativeElement.classList.add('sticky');
    } else {
      this.navbar?.nativeElement.classList.remove('sticky');
    }
  }
}
