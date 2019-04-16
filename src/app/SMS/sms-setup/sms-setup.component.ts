import { Component } from "@angular/core";
import { Globals } from '../../globals';

@Component({
  selector: 'app-sms-setup',
  templateUrl: './sms-setup.component.html',
  styleUrls: ['./sms-setup.component.css'],
  providers: [Globals]
})
export class SmsSetupComponent {

  b:boolean;

  constructor(private globals: Globals) {
    this.b = globals.backup;
  }

  isNumberKeyCode(event) {
    var code = event.keyCode | event.charCode;
  
    if (event.shiftKey) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
    if (code == 9 || code == 8 || code == 13 || code == 37 || code == 39 || (code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
      // tab || backspace || left arrow || right arrow || Numbers
      return true;
    }
    return false;
  }
}
