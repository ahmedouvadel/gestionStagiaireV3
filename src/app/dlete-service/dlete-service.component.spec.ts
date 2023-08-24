import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleteServiceComponent } from './dlete-service.component';

describe('DleteServiceComponent', () => {
  let component: DleteServiceComponent;
  let fixture: ComponentFixture<DleteServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DleteServiceComponent]
    });
    fixture = TestBed.createComponent(DleteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
