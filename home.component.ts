import { Component ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  // @ViewChild(SubjectsComponent) Subjts




  name = 'abc';

  announcement : number = 0;
mobile : number = 0;
age : number = 0;
email : string  = "";

  incriment (){

    this.announcement  +=1; 
   }

   decriment (){

    this.announcement  -=1; 
   }

   changeName(e: any){
    debugger
  this.name = e.target.value;
  console.log(e);
  console.log(e.target.value);

   }

   changeMobile(e: any){
    debugger
  this.mobile = e.target.value;
  console.log(e);
  console.log(e.target.value);

   }
   changeAge(e: any){
    debugger
  this.age = e.target.value;
  console.log(e);
  console.log(e.target.value);

   }
   changeemail(e: any){
    debugger
  this.email = e.target.value;
  console.log(e);
  console.log(e.target.value);

   }

}
