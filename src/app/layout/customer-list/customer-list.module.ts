import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from './customer-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: CustomerListComponent
    }
];

@NgModule({
    declarations: [CustomerListComponent],
    imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CustomerListRoutingModule
  ]
})
export class CustomerListModule { }
