import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfaVerificationComponent } from './mfa-verification/mfa-verification.component';

import { RouterModule, Routes } from "@angular/router";
import { MfaSetupComponent } from './mfa-setup/mfa-setup.component';
import { SmsSetupComponent } from './SMS/sms-setup/sms-setup.component';
import { MobileVerificationComponent } from './SMS/mobile-verification/mobile-verification.component';
import { EmailSetupComponent } from './Email/email-setup/email-setup.component';
import { EmailVerificationComponent } from './Email/email-verification/email-verification.component';
import { AuthenticatorSetupComponent } from './Authenticator/authenticator-setup/authenticator-setup.component';
import { AuthenticatorVerificationComponent } from './Authenticator/authenticator-verification/authenticator-verification.component';
import { MfaWorkedComponent } from './mfa-worked/mfa-worked.component';
import { Globals } from './globals';


const appRoutes: Routes = [
  { path: 'MFA_verification', component: MfaVerificationComponent },
  { path: 'MFA_setup', component: MfaSetupComponent },
  { path: 'SMS_setup', component: SmsSetupComponent },
  { path: 'Mobile_verification', component: MobileVerificationComponent },
  { path: 'Email_setup', component: EmailSetupComponent },
  { path: 'Email_verification', component: EmailVerificationComponent },
  { path: 'Authenticator_setup', component: AuthenticatorSetupComponent},
  { path: 'Authenticator_verification', component: AuthenticatorVerificationComponent },
  { path: 'MFA_worked', component: MfaWorkedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MfaVerificationComponent,
    MfaSetupComponent,
    SmsSetupComponent,
    MobileVerificationComponent,
    EmailSetupComponent,
    EmailVerificationComponent,
    AuthenticatorSetupComponent,
    AuthenticatorVerificationComponent,
    MfaWorkedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
var backup = false;