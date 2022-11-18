import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private note: NoteServiceService) { }
  @Input() noteCard: any;
  noteID: any;
  isTrash: boolean = false;
  ngOnInit(): void {
    console.log(this.noteCard)
  }

  trash() {
    
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log("Deleted Successfully", response);

    })
  }

}
