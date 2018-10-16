import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatTabsModule, MatInputModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssetDetailComponent }   from './assetDetail/assetDetail.component';
import { AdminComponent }   from './admin/admin.component';
import { StrategyDetailComponent }   from './strategyDetail/strategyDetail.component';
import { SearchComponent }   from './search/search.component';
import { SearchDetailComponent }   from './searchDetail/searchDetail.component';
import { NotificationsComponent }   from './notifications/notifications.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ContentAreaComponent } from './content-area/content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssetDetailComponent,
    AdminComponent,
    StrategyDetailComponent,
    SearchComponent,
    SearchDetailComponent,
    NotificationsComponent,
    LoginComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
