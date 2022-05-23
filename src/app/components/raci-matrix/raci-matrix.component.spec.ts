import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RACIMatrixComponent } from './raci-matrix.component';

describe('RACIMatrixComponent', () => {
  let component: RACIMatrixComponent;
  let fixture: ComponentFixture<RACIMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RACIMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RACIMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
