import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorVerificationComponent } from './authenticator-verification.component';

describe('AuthenticatorVerificationComponent', () => {
  let component: AuthenticatorVerificationComponent;
  let fixture: ComponentFixture<AuthenticatorVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatorVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
