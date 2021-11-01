import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './screens/home/content/contact/contact.component';
import { DevCornerComponent } from './screens/home/content/dev-corner/dev-corner.component';
import { MainPageComponent } from './screens/home/content/main-page/main-page.component';
import { MusicComponent } from './screens/home/content/music/music.component';
import { WorkComponent } from './screens/home/content/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'dev',
    component: DevCornerComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
