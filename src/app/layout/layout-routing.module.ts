import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
             { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: '', loadChildren: () => import('./customer-list/customer-list.module').then(m => m.CustomerListModule) },
            { path: 'customerdetail', loadChildren: () => import('./customer-detail/customer-detail.module').then(m => m.CustomerDetailModule) },
     ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
