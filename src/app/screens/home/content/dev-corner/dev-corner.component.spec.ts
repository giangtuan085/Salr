import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCornerComponent } from './dev-corner.component';

describe('DevCornerComponent', () => {
  let component: DevCornerComponent;
  let fixture: ComponentFixture<DevCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
