import { Component} from "@angular/core";
import { Globals } from '../globals';

@Component({
  selector: 'app-mfa-verification',
  templateUrl: './mfa-verification.component.html',
  styleUrls: ['./mfa-verification.component.css'],
  providers: [Globals]
})
export class MfaVerificationComponent {

  b:boolean;

  constructor(private globals: Globals) {
    this.b = globals.backup;
  }
}
