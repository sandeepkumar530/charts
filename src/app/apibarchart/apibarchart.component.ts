import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BarserviceService } from '../barservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apibarchart',
  templateUrl: './apibarchart.component.html',
  styleUrls: ['./apibarchart.component.css']
})
export class ApibarchartComponent {
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Values',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public barChartLegend = true;
  public barChartPlugins = [];

   constructor(private _barseriveService:BarserviceService){
       this._barseriveService.BarChart().subscribe(
        (data:any)=>{
          console.log(data);
          this.barChartData.labels=data.map((item: any) => item.country);
          this.barChartData.datasets[0].data =data.map((item: any) => item.visits);
        }
      )}
  }
