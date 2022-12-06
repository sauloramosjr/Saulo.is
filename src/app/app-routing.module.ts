import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./is/is-routing.module').then((m) => m.IsRoutingModule),
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: () =>
      import('./about/about-routing.module').then((m) => m.IsRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
