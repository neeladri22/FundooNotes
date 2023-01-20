import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  fname: any;
  lname: any;
  email: any;
  token:any;
  id: any;
  collabEmail: any = '';
  collabList: any = [];
  collabData: any;
  collabs: any = [];
  constructor(private note:NoteService,  public dialogRef:MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.fname = localStorage.getItem('fname');
    this.lname = localStorage.getItem('lname');
    this.email = localStorage.getItem('email');
    this.token = localStorage.getItem('token')
    this.id = data.id;
    this.collabs = data.collaborators;
  }

  

  ngOnInit(): void {
  }
  
  collab(event: any) {
    console.log(event.target.value);

    let data = {
      searchWord: (event.target.value)
    }
    this.note.getCollab(data).subscribe((response: any) => {
      console.log(response);
      this.collabList = response.data.details
    })
    
  }
  selectCollab(data: any) {
    this.collabData = data
    this.collabEmail = data.email
    
  }
  addCollab() {
    let data = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    console.log(data);
    this.note.addCollab(this.data.id, data).subscribe((response: any) => {
      console.log(response);
      this.collabs.push(data)
     
    })
  }

  removeCollab(collabid: any) {
    this.note.removeCollab(this.data.id, collabid).subscribe((res: any) => {
      console.log(res);
      this.collabs.splice(res)
     
    })
  }
  save(collabList: any) {
    this.dialogRef.close(collabList);
  }
  cancel(collabList: any) {
    this.dialogRef.close(collabList);
  }
 

}
