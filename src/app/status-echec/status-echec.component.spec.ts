import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEchecComponent } from './status-echec.component';

describe('StatusEchecComponent', () => {
  let component: StatusEchecComponent;
  let fixture: ComponentFixture<StatusEchecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusEchecComponent]
    });
    fixture = TestBed.createComponent(StatusEchecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
