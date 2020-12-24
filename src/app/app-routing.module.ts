import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FotterComponent } from './common/fotter/fotter.component';

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
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  { path: 'dashboard',
   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
