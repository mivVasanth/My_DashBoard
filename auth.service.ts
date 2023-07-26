import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  apiurl = 'http://localhost:3000/user';

  apiurl1 = 'http://localhost:3000/Books';

  apiurl2 = 'http://localhost:3000/BarCharts';

  Getall(){
    return this.http.get(this.apiurl);
  }

  GetallBooks(){
    debugger
    return this.http.get(this.apiurl1);
  }

  GetBarCharts(){
    debugger
    return this.http.get('http://localhost:3000/BarCharts');
  }

  GetAllRole(){
    return this.http.get('http://localhost:3000/role');
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  Getbyid(id:number){
    return this.http.get(this.apiurl+'/'+id);
  }

  proceedregister(inputdata : any){
    debugger
    return this.http.post(this.apiurl,inputdata);
  }

  updateuser(inputdata : any ,code : any){
    debugger
    return this.http.put(this.apiurl+'/'+inputdata,code );
  }

  isloggedin(){

    return sessionStorage.getItem('username') != null;


  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!= null? sessionStorage.getItem('userrole')?.toString():'';
  }

  
}
