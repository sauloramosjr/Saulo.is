import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsComponent } from './is.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IsComponent,
    title: 'Saulo.is',
    data: { title: '.is()' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsRoutingModule {}
