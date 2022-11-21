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
  isArchive: boolean = false;
  colorsArr: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' }];

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

  onArchiev() {
   
    let reqdata = {
      noteIdList: [this.noteCard.id], 
      isArchived: true    
    }
    console.log(reqdata);
    this.note.archivedNotes(reqdata).subscribe((response:any)=>{
      console.log("Archieve Successfully", response);
     
    });
  }

  setColor(color:any) {
   this.noteCard.color=color;
    let reqdata = {
      color:color,
      noteIdList: [this.noteCard.id], 
        
    }
    console.log(reqdata);
    this.note.getColorNotes(reqdata).subscribe((response:any)=>{
      console.log("Color changed Successfully", response);
     
    });
  }

}
