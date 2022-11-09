import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  submitted=false;
 show=false;
  constructor() { }

  ngOnInit(): void {
  }
  isShow(){
    this.show=true;
  }

  close():void{
    this.show=false;
   
  }

}
