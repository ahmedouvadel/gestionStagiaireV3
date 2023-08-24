import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleteUserComponent } from './dlete-user.component';

describe('DleteUserComponent', () => {
  let component: DleteUserComponent;
  let fixture: ComponentFixture<DleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DleteUserComponent]
    });
    fixture = TestBed.createComponent(DleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
