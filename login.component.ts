import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder , Validators } from '@angular/forms'
import { ToastrService
} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr:ToastrService , private service : AuthService , private router : Router){
    sessionStorage.clear();

  }
userdata : any;

loginform= this.builder.group({
  username : this.builder.control('', Validators.required),
  password : this.builder.control('', Validators.required)
})

proceedelogin(){
//   debugger
//   if(this.loginform.valid){
// this.service.proceedregister(this.loginform.value).subscribe(res => {
//   this.toastr.success('please contact admin for enable access','Registered successfully')
//   this.router.navigate(['login']);
// });
//   }else{
//     debugger
// this.toastr.warning('please enter valid data')
//   }
this.service.Getbycode(this.loginform.value.username).subscribe(res =>{
  this.userdata=res;
  console.log(this.userdata);
  debugger
  if(this.userdata[0].password === this.loginform.value.password ){
    if(this.userdata[0].isactive){
     sessionStorage.setItem('username',this.userdata.id),
     sessionStorage.setItem('userrole',this.userdata.role),
     this.router.navigate([''])

    }else{
      this.toastr.error('inactive user , contact adimin')
    }

    

  }else{
    this.toastr.error('Invalid userName or Password')
  }

  
}
)

}

}
