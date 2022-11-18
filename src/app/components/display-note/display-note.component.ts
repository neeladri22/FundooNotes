import { Component, Input, OnInit } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  note: any
  @Input() childMessage:any;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      height:'170px',
      data:notes,
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }

}
