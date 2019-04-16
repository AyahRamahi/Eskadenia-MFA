import { Component } from "@angular/core";
import { Globals } from '../../globals';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
  providers: [Globals]
})
export class EmailVerificationComponent {

  b:boolean;

  constructor(private globals: Globals) {
    this.b = globals.backup;
  }

}
