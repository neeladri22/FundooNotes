import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpService/http-services.service';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token:any;

  constructor(private httpService:HttpServicesService) { 
    this.token=localStorage.getItem('token')
  }
  addNotes(reqdata:any){
    console.log(reqdata);
    console.log(this.token);

    let header ={
      headers:new HttpHeaders({
        'content-type' :'application/json',
        'Authorization':this.token

      })
    }

    return this.httpService.postService('/notes/addNotes',reqdata,true,header)
  }

  
  
  getNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    } 
    return this.httpService.getservice('/notes/getNotesList',true,header) 
  }
}