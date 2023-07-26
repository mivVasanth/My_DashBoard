import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder , Validators } from '@angular/forms'
import { ToastrService
} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private toastr:ToastrService , private service : AuthService , private router : Router){

  }
registerform = this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  password:this.builder.control('',Validators.compose([Validators.required])),
  gender:this.builder.control('male'),
  role:this.builder.control(''),
  inactive:this.builder.control(false),



}

);

proceedregistration(){
  debugger
  if(this.registerform.valid){
this.service.proceedregister(this.registerform.value).subscribe(res => {
  this.toastr.success('please contact admin for enable access','Registered successfully')
  this.router.navigate(['login']);
});
  }else{
    debugger
this.toastr.warning('please enter valid data')
  }
}

}
