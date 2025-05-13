import { Component } from '@angular/core';
import { BarserviceService } from '../barservice.service';

@Component({
  selector: 'app-apipiechart',
  templateUrl: './apipiechart.component.html',
  styleUrls: ['./apipiechart.component.css']
})
export class ApipiechartComponent {

  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
   constructor(private _barseriveService:BarserviceService){
          this._barseriveService.PieChart().subscribe(
           (data:any)=>{
             console.log(data);
             this.pieChartLabels=data.map((item: any) => item.country);
             this.pieChartData=data.map((item: any) => item.visits);
           }
         )}
}
