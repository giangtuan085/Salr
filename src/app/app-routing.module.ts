import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './core/guards/access-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule),
    canActivate: [AccessGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
