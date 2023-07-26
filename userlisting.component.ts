import { Component, ViewChild , AfterViewInit} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import {NgForm} from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  announcement : number = 0;

 
 


// filterText: any;
_filterText : string = "";
  filterterm: any;
  booklist: any;
  // booklist: any;


get filterText(){
return this._filterText;
}

set filterText(value : string){


  this._filterText = value;
  this.userlist = this.filterstudentsbyter(value);
}

  constructor(private service: AuthService , private dialog : MatDialog) {
    this.Loaduser();
    // this.getbooks();
  }
  dataSource: any;
  userlist: any;

@ViewChild(MatPaginator) paginator !:MatPaginator;
@ViewChild(MatSort) sort !:MatSort;



  Loaduser() {
    this.service.Getall().subscribe(res =>{
      this.userlist=res;
      console.log(this.userlist,'vvvvvvv');
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      

    });
  }


  // getbooks(){
  //   debugger
  //   this.service.GetallBooks().subscribe(res =>{
  //       this.booklist=res;
  //       console.log(this.booklist,'vvvvvvv');

  //     // this.service.Getall().subscribe(res =>{
  //     //   this.userlist=res;
  //     //   console.log(this.userlist,'vvvvvvv');


  //   })
  // }


  updateuser(code: any) {
 const popup= this.dialog.open(UpdatepopupComponent,{
  enterAnimationDuration:'1000ms',
  exitAnimationDuration: '500ms',
  width: '50%',
  
  data : {
   
    usercode:code
  }
});
popup.afterClosed().subscribe(res =>{
  this.Loaduser();
});

  }

 

  opendialog(){
    

  }

  filterstudentsbyter(filterterm : string){

    if(this.userlist.length === 0 || this.filterText === null){

      return this.userlist;
    }

    else{
           this.userlist.filter((  )=> {

            return this.userlist.name === this.filterterm; 

           })

    }
  }



  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];



  onSelectFile(event :any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // this.url = event.target.result;
      }
    }
  }
  
}
