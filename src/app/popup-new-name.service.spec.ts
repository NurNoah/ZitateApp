import { TestBed } from '@angular/core/testing';

import { PopupNewNameService } from './popup-new-name.service';

describe('PopupNewNameService', () => {
  let service: PopupNewNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupNewNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
