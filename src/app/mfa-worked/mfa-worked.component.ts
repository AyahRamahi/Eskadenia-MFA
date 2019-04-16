import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-mfa-worked',
  templateUrl: './mfa-worked.component.html',
  styleUrls: ['./mfa-worked.component.css'],
  providers: [Globals]
})
export class MfaWorkedComponent implements OnInit {
  
  g:Globals ;

  constructor(private globals: Globals) { 
    this.g=globals;
  }

  ngOnInit() {
  }
  
  onclick(e){
    this.g.backup = true;
    console.log(this.g.backup);
  }
}
