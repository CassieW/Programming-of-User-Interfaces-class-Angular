import { TestBed } from '@angular/core/testing';

import { EmailServicesService } from './email.service';

describe('EmailServicesService', () => {
  let service: EmailServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
