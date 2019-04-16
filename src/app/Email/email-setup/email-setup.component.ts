import { Component } from "@angular/core";
import { Globals } from '../../globals';

@Component({
  selector: 'app-email-setup',
  templateUrl: './email-setup.component.html',
  styleUrls: ['./email-setup.component.css'],
  providers: [Globals]
})
export class EmailSetupComponent {

  b:boolean;
  check="";

  constructor(private globals: Globals) {
    this.b = globals.backup;
  }

  onkeyup(){
    let email =document.getElementById("email").value;
    let check1:boolean = email.lastIndexOf("@") != -1;
    let check2:boolean = email.lastIndexOf(".com") != -1;
    if ( !check1|| !check2 )
      this.check="Email is incorrect";
    else
      this.check=""; 
  }

}
