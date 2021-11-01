import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuRoute } from 'src/app/core/models/menu-route';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PageHeaderComponent implements OnInit {
  @ViewChild('navbar') navbar!: ElementRef;
  private initialHeaderOffset!: number;
  public routes!: MenuRoute[];

  constructor(private langService: LanguageService) {
    langService.menuItems.subscribe((data: MenuRoute[]) => {
      this.routes = data;
    });
  }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  public onScrollingEvent(): void {
    if (this.navbar.nativeElement.offsetTop > 0) {
      this.initialHeaderOffset = this.navbar.nativeElement.offsetTop;
    }

    // set class sticky to navbar if page is scroll down
    if ((window as any).pageYOffset >= this.initialHeaderOffset) {
      this.navbar.nativeElement.classList.add('sticky');
    } else {
      this.navbar.nativeElement.classList.remove('sticky');
    }
  }
}
