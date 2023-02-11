import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy,LocationStrategy  } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ResourcesComponent } from './resources/resources.component';
import { RsidebarComponent } from './rsidebar/rsidebar.component';
import { RsFormComponent } from './resources/rs-form/rs-form.component';
import { RouterModule } from '@angular/router';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MachinesComponent } from './machines/machines.component';
import { ViewComponent } from './machines/view/view.component';
import { BigChartComponent } from './machines/big-chart/big-chart.component';
import { ChartModule ,LineSeriesService , CategoryService } from '@syncfusion/ej2-angular-charts';
import { Chart1Component } from './charts/chart1/chart1.component';
import { Chart2Component } from './charts/chart2/chart2.component';
import { Chart3Component } from './charts/chart3/chart3.component';
import { Chart4Component } from './charts/chart4/chart4.component';
@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ResourcesComponent,
    RsidebarComponent,
    RsFormComponent,
    ManufacturingComponent,
    MachinesComponent,
    ViewComponent,
    BigChartComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
  ],
  imports: [ChartModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      titleFontSize: '14',
      subtitleFontSize: '7',
      showUnits: true,
    }),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [LineSeriesService,{provide:localStorage,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
