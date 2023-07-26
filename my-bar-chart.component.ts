import { Component } from '@angular/core';
import {Chart}from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent {
  Chart: any;
  dataSource: any;
  barChartLegend: any;
  barChartLables: any;
  RealData: any;
  barChartData: any;
  barChartType: any;
  
constructor( private service : AuthService ){
  this.getCharts();
}


  public barChartOptions ={
    
   scaleShowVerticallines : false,
   responsive : true
  }

//  public  barChartLables = 
//   [2001,2002,2003,2004,4565,75657,9878]

  // public barChartLegend = true;
 
  // public barChartData =[
  //   {
  //    data: [2,4,5,5,6,6,7,7,7,7,7] , label : 'seriesA'
  //   },
  //   {
  //     data: [24,4,5,6,7,54,4,3,3,4,5,6,6,6] , label : 'seriesB'
  //    }
  // ]

//  public  barChartType = 'bar';
 

 getCharts(){
  this.service.GetBarCharts().subscribe(res =>{
    this.RealData= res;
    console.log(this.RealData,'chaertys');
    // this.dataSource = new (this.Chart);
    // this.dataSource.paginator=this.paginator;
    // this.dataSource.sort=this.sort;
    this.barChartLegend = this.RealData[1].Legend;
    this.barChartLables = this.RealData[0].Lables;
    this.barChartData =  this.RealData[2].Data;
    this.barChartType =  this.RealData[3].ChartType
    ;

    console.log( this.barChartLegend,'legend')
    console.log( this.barChartLables,'labels')
    console.log( this.barChartData,'Data')
    console.log( this.barChartType,'Type')

  });
 }


}
