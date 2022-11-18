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
      console.log(this.noteArray);
    })
  }
}
