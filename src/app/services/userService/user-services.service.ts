import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpService/http-services.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpService:HttpServicesService) { }
  login(reqdata:any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'content-type' :'application/json',
       
      })
    }

    return this.httpService.postService('/user/login',reqdata,false,header)
    
    
  }

}
