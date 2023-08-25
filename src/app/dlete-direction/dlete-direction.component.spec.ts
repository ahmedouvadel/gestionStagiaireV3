import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleteDirectionComponent } from './dlete-direction.component';

describe('DleteDirectionComponent', () => {
  let component: DleteDirectionComponent;
  let fixture: ComponentFixture<DleteDirectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DleteDirectionComponent]
    });
    fixture = TestBed.createComponent(DleteDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
