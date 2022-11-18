import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  noteTitle: string = '';
  noteDescription: string = '';
  noteId: any;
  constructor(public note: NoteServiceService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data,this.data.noteId)
    this.noteTitle = this.data.title
    this.noteDescription = this.data.description
   
  }
  Onclose() {
    let reqdata = {
      title: this.noteTitle,
      description: this.noteDescription,
      noteId: this.data.id,
    }
    this.note.updateNote(reqdata).subscribe((respone:any) => {
      console.log('updated note successfully: ', respone)
    })
    this.dialogRef.close(); 
  }


}
