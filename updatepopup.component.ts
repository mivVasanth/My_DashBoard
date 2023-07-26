import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import {
  ToastrService
} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  rolelist: any;
  editdata: any;

  constructor(private builder: FormBuilder, private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any  , private toastr : ToastrService , private dialog : MatDialogRef<UpdatepopupComponent>) {

  }
  ngOnInit(): void {
    debugger
    this.service.GetAllRole().subscribe(res => {
      this.rolelist = res;
      console.log(this.rolelist, 'vvcbcbbcbrole')

    })

    debugger

    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.Getbyid(this.data.usercode).subscribe(res => {
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

    }
  }



  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    email: this.builder.control(''),
    password: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false),



  })
  updateuser() {
   if(this.registerform.valid) {
  debugger
  this.service.updateuser(this.registerform.value.id,this.registerform.value).subscribe(res => 
    {
      this.toastr.success('Updated Data')
      this.dialog.close();
    })

}else{
this.toastr.warning('pleaase select admin')
}
  }

}
