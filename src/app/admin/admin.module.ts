import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityModule } from '@casl/angular';
import { Ability } from '@casl/ability';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ability } from './admin-ability';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AbilityModule
  ],
  providers: [
    { provide: Ability, useValue: ability }
  ]
})
export class AdminModule { }
