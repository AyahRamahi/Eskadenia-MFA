import { Component } from "@angular/core";
import { Globals } from '../../globals';

@Component({
  selector: 'app-mobile-verification',
  templateUrl: './mobile-verification.component.html',
  styleUrls: ['./mobile-verification.component.css'],
  providers: [Globals]
})
export class MobileVerificationComponent {

  b:boolean;

  constructor(private globals: Globals) {
    this.b = globals.backup;
  }

}
