import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote()
  }
  getAllNote() {
    this.note.getNotes().subscribe((response: any) => {
      console.log(response.data.data);
      this.noteArray = response.data.data;
       this.noteArray=this.noteArray.filter((k:any)=>{
        return k.isArchived==false && k.isDeleted==false;
      }) 
      this.noteArray=this.noteArray.reverse();
      console.log(this.noteArray);
    })
  }

 
  colourchanged(e: any) {
    console.log(e);
    this.getAllNote();
  }
  
  trash(data: any) {
    console.log("refresh", data);
    this.getAllNote();
  }

  archive(data: any) {
    console.log("refresh", data);
    this.getAllNote();
  }
  

}
