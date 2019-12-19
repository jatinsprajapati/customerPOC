import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: ':id', component: CustomerDetailComponent
    }
];
@NgModule({
  declarations: [CustomerDetailComponent],
    imports: [
    RouterModule.forChild(routes),
    CommonModule,
        CustomerDetailRoutingModule,
        ReactiveFormsModule
  ]
})
export class CustomerDetailModule { }
