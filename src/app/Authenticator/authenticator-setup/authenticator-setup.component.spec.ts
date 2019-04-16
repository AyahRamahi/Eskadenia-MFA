import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorSetupComponent } from './authenticator-setup.component';

describe('AuthenticatorSetupComponent', () => {
  let component: AuthenticatorSetupComponent;
  let fixture: ComponentFixture<AuthenticatorSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatorSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
