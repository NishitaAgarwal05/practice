import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LraComponent } from './lra.component';

describe('LraComponent', () => {
  let component: LraComponent;
  let fixture: ComponentFixture<LraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LraComponent]
    });
    fixture = TestBed.createComponent(LraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
