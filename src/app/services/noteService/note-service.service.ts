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

  trashNote(reqdata: any) {

    console.log(this.token)
  
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('/notes/trashNotes',reqdata, true, headerOption)
  }
  archivedNotes(reqdata: any) {

    console.log(this.token)
  
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('/notes/archiveNotes',reqdata, true, headerOption)
  }
  DeleteforeverNote(reqdata: any) {

    console.log(this.token)
  
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('/notes/deleteForeverNotes',reqdata, true, headerOption)
  }
  getColorNotes(reqdata: any) {

    console.log(this.token)
  
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('/notes/changesColorNotes',reqdata, true, headerOption)
  }
  

  getAllTrashNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    } 
    return this.httpService.getservice('/notes/getTrashNotesList',true,header) 
  }

  getArchieveNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    } 
    return this.httpService.getservice('/notes/getArchiveNotesList',true,header) 
  }

  updateNote(reqdata: any) {
    console.log(this.token);

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('/notes/updateNotes', reqdata, true, headers)
  }
  
}
