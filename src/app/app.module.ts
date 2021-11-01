import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UploadRoleGuard } from './core/guards/upload-role.guards';
import { AdminRoleGuard } from './core/guards/admin-role-guards';
import { AccessGuard } from './core/guards/access-guard';
import { ReviewRoleGuard } from './core/guards/review-role-guards';
import { HomeComponent } from './screens/home/home.component';
import { PageHeaderComponent } from './screens/home/parts/page-header/page-header.component';
import { IntroductionComponent } from './screens/home/parts/introduction/introduction.component';
import { ExperienceComponent } from './screens/home/parts/experience/experience.component';
import { PersonalInfoComponent } from './screens/home/parts/personal-info/personal-info.component';
import { MainPageComponent } from './screens/home/content/main-page/main-page.component';
import { PageFooterComponent } from './screens/home/parts/page-footer/page-footer.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkComponent } from './screens/home/content/work/work.component';
import { DevCornerComponent } from './screens/home/content/dev-corner/dev-corner.component';
import { MusicComponent } from './screens/home/content/music/music.component';
import { ContactComponent } from './screens/home/content/contact/contact.component';
import { JobPreviewComponent } from './screens/home/parts/experience/child/job-preview/job-preview.component';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageHeaderComponent,
    IntroductionComponent,
    ExperienceComponent,
    PersonalInfoComponent,
    PageFooterComponent,
    MainPageComponent,
    WorkComponent,
    DevCornerComponent,
    MusicComponent,
    ContactComponent,
    JobPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [AccessGuard, AdminRoleGuard, UploadRoleGuard, ReviewRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
