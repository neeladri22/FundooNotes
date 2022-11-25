import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  note: any
  @Input() childMessage: any;
  @Output() changeColorRef = new EventEmitter<any>();
  @Output() trashNoteToRef = new EventEmitter<any>();
  @Output() archiveNoteToRef = new EventEmitter<any>();
  @Output() deleteNoteToRef = new EventEmitter<any>();
  @Output() restoreNoteToRef = new EventEmitter<any>();
  @Output() unarchiveNoteToRef = new EventEmitter<any>();

  Search='';
  constructor(public dialog: MatDialog, private dataServices:DataService) { }
  ngOnInit(): void {
    this.dataServices.currentMessage.subscribe((result:any)=>{
      console.log(result)
      this.Search=result;
    })
  }
  openDialog(notes: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      height: '170px',
      data: notes,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  changeColor(event: any) {
    console.log(event);
    this.changeColorRef.emit(event)


  }
  trash(event: any) {
    console.log(event);
    this.trashNoteToRef.emit(event)
  }
  archive(event: any) {
    console.log(event);
    this.archiveNoteToRef.emit(event)
  }
  unarchive(event: any) {
    console.log(event);
    this.unarchiveNoteToRef.emit(event)
  }
  delete(event: any) {
    console.log(event);
    this.deleteNoteToRef.emit(event)
  }
  restore(event: any) {
    console.log(event);
    this.restoreNoteToRef.emit(event)
  }
}
