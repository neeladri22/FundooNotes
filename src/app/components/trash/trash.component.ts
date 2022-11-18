import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteServiceService) { }


  ngOnInit(): void {
    this.getTrashList()
  }
  getTrashList() {
    this.note.getAllTrashNotes().subscribe((response: any) => {
      console.log(response.data.data);
      this.noteArray = response.data.data;
      console.log(this.noteArray);
      this.noteArray.reverse();
      //   this.noteArray = this.noteArray.filter((obj: any) => {
      //   return obj.isTrash === true
      // })
    })
  }

 

}
