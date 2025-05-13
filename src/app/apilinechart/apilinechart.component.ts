import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, Point } from 'chart.js';
import { LineserviceService } from '../lineservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apilinechart',
  templateUrl: './apilinechart.component.html',
  styleUrls: ['./apilinechart.component.css']
})
export class ApilinechartComponent {
  
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  };

  public lineChartData: ChartData<'line'> = {
    labels: [
      
    ],
    datasets: [
      {
        label: 'US Population by Year',
        data: [],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.4)',
        tension: 0.4,
        fill: true
      }
    ]}
  
  constructor(private _lineseriveService:LineserviceService){
    _lineseriveService.LineChart().subscribe(
      (data:any)=>{
        console.log(data);
        this.lineChartData.labels = data.data.map((item: any) => item.Year);
        
        this.lineChartData.datasets[0].data = data.data.map((item: any) => item.Population);
      }
    )}

   

}
  
  



