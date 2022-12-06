import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsComponent } from './is.component';
import { IsRoutingModule } from 'src/app/is/is-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IsComponent],
  imports: [CommonModule, IsRoutingModule, RouterModule],
})
export class IsModule {}
