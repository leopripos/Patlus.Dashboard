import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard, UnauthenticatedGuard } from '@app/feature/authentication';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SitePageRoutingModule { }
