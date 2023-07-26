import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent {
  RealData: any;
  doughnutChartData: any;
  doughnutChartLables: any;
  doughnutChartType: any;

constructor(private service : AuthService){

  this.getCharts();

}


//  doughnutChartData = [34,45,56,56];
//  doughnutChartType = 'doughnut';

// public doughnutChartLables = [
// 'sales1','sales2','sales3', 'sales4'
// ];
  getCharts(){
    debugger
    this.service.GetBarCharts().subscribe(res =>{
      this.RealData= res;
      console.log(this.RealData,'chaertys');
      // this.dataSource = new (this.Chart);
      // this.dataSource.paginator=this.paginator;
      // this.dataSource.sort=this.sort;
      // this.barChartLegend = this.RealData[1].Legend;
     
      this.doughnutChartData =  this.RealData[4].Dchartdata;
       this.doughnutChartLables = this.RealData[5].Dchartlables;
       this.doughnutChartType = this.RealData[6].Dcharttype;
      // this.barChartType =  this.RealData[3].ChartType
      // ;
  
      // console.log( this.barChartLegend,'legend')
      console.log( this.doughnutChartLables,'labels')
      console.log( this.doughnutChartData,'Data')
      console.log( this.doughnutChartType,'Type')
  
    });
   }
   
}
