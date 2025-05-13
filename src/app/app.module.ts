import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarareaChartComponent } from './polararea-chart/polararea-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { ApilinechartComponent } from './apilinechart/apilinechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApibarchartComponent } from './apibarchart/apibarchart.component';
import { ApipiechartComponent } from './apipiechart/apipiechart.component';
import { AllchartsComponent } from './allcharts/allcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarareaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    ApilinechartComponent,
    DashboardComponent,
    ApibarchartComponent,
    ApipiechartComponent,
    AllchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
