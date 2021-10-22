import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterStateSnapshot } from '@angular/router';
import { FileUpload } from 'src/app/core/models/file-upload';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedFile?: FileUpload;

  constructor(
    private lang: LanguageService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
    ) {
  }

  ngOnInit(): void {
    console.log('translation', this.lang.translations);
    this.registSvgIcon();
  }

  private registSvgIcon(): void {
    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icon/logout.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'user',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icon/user.svg'
      )
    );
  }

  public selectItem(item: FileUpload): void {
    this.selectedFile = item;
  }

}
