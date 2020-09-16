import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FotterComponent } from './common/fotter/fotter.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    // path: 'login',loadChildren: '/src/app/login/login.module#LoginModule'
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'footer',
    component: FotterComponent,
  },

  {
    path: 'item',
    component: ItemComponent,
  },
  { path: 'dashboard',
   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
