import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContentFormComponent } from './email-content-form.component';

describe('EmailContentFormComponent', () => {
  let component: EmailContentFormComponent;
  let fixture: ComponentFixture<EmailContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailContentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
