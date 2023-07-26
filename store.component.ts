import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  booklist: any;
  data: any;
  editdata: any;
  registerform: any;
  

  constructor(private service: AuthService ){

    this.getbooks();
  }

  id : number =1;

  ngOnInit(): void {
    
    this.service.Getbyid(this.id).subscribe(res => {
        debugger
        this.editdata = res;
        console.log(this.editdata, ' edit data')

        debugger
        this.registerform.setValue({
          
          id: this.editdata.id,
          name: this.editdata.name,
          email: this.editdata.email,
          password: this.editdata.password,
          gender: this.editdata.gender,
          role: this.editdata.role,
          isactive: this.editdata.isactive
        })
      })

    
    
    // throw new Error('Method not implemented.');
  }

  changeClient(value :any){
    console.log(value,'event');
    console.log(value);
}
  getbooks(){
    debugger
    this.service.GetallBooks().subscribe(res=>{

      this.booklist = res;
      console.log(this.booklist,'booklist')
      console.log(res,'res')

      // this.service.Getall().subscribe(res =>{
      //   this.userlist=res;
      //   console.log(this.userlist,'vvvvvvv');


    })
  }

}
