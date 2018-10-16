import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssetDetailComponent }   from './assetDetail/assetDetail.component';
import { AdminComponent }   from './admin/admin.component';
import { StrategyDetailComponent }   from './strategyDetail/strategyDetail.component';
import { SearchComponent }   from './search/search.component';
import { SearchDetailComponent }   from './searchDetail/searchDetail.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'asset-detail', component: AssetDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'strategy-detail', component: StrategyDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchdetail', outlet: 'sidebar', component: SearchDetailComponent },
  { path: 'notifications', outlet: 'sidebar', component: NotificationsComponent },
  { path: 'login', outlet: 'login', component: LoginComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
