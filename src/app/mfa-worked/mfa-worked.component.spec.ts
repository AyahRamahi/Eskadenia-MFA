import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaWorkedComponent } from './mfa-worked.component';

describe('MfaWorkedComponent', () => {
  let component: MfaWorkedComponent;
  let fixture: ComponentFixture<MfaWorkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaWorkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
