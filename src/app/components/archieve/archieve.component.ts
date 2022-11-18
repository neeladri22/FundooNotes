import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteServiceService) { }


  ngOnInit(): void {
    this.getArchiveList()
  }
  getArchiveList() {
    this.note.getArchieveNotes().subscribe((response: any) => {
      console.log(response.data.data);
      this.noteArray = response.data.data;
      console.log(this.noteArray);
      this.noteArray.reverse();
    })
  }

}
