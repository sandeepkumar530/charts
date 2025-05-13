import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PolarareaChartComponent } from './polararea-chart/polararea-chart.component';
import { ApilinechartComponent } from './apilinechart/apilinechart.component';
import { ApibarchartComponent } from './apibarchart/apibarchart.component';
import { ApipiechartComponent } from './apipiechart/apipiechart.component';
import { AllchartsComponent } from './allcharts/allcharts.component';

const routes: Routes = [
  {path:'',component:AllchartsComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'line-chart',component:LineChartComponent},
    {path:'bar-chart',component:BarChartComponent},
    {path:'pie-chart',component:PieChartComponent},
    {path:'doughnut-chart',component:DoughnutChartComponent},
    {path:'radar-chart',component:RadarChartComponent},
    {path:'scatter-chart',component:ScatterChartComponent},
    {path:'bubble-chart',component:BubbleChartComponent},
    {path:'polararea-chart',component:PolarareaChartComponent},
    {path:'apilinechart',component:ApilinechartComponent},
    {path:'apibarchart',component:ApibarchartComponent},
    {path:'apipiechart',component:ApipiechartComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
