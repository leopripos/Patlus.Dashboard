import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

const globalRoutes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(globalRoutes)
  ],
  exports: [RouterModule]
})
export class SitePageRoutingModule { }
