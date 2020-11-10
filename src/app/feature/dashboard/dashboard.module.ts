import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DateFormNowPipe } from 'src/app/shared/pipe/date-form-now.pipe';
import { CardComponent } from './card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, DateFormNowPipe, CardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, HttpClientModule],
  providers: [DashboardService]
})
export class DashboardModule {}
