import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSetupComponent } from './sms-setup.component';

describe('SmsSetupComponent', () => {
  let component: SmsSetupComponent;
  let fixture: ComponentFixture<SmsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
