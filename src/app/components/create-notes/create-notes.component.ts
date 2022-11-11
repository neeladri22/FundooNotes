import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createForm !: FormGroup;
  submitted = false;
  show = false;
  constructor(private formBuilder: FormBuilder, private note: NoteServiceService) { }


  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  isShow() {
    this.show = true;
  }

  close(): void {
    this.show = false;
    let payload = {
      title: this.createForm.value.title,
      description: this.createForm.value.description
    }
    this.note.addNotes(payload).subscribe((result: any) => {
      console.log(result);

    })
  }

}
