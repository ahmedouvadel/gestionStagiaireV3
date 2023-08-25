import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePeriodeComponent } from './delete-periode.component';

describe('DeletePeriodeComponent', () => {
  let component: DeletePeriodeComponent;
  let fixture: ComponentFixture<DeletePeriodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePeriodeComponent]
    });
    fixture = TestBed.createComponent(DeletePeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
