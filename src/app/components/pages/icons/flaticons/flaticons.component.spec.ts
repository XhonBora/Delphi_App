import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaticonsComponent } from './flaticons.component';

describe('FlaticonsComponent', () => {
  let component: FlaticonsComponent;
  let fixture: ComponentFixture<FlaticonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaticonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaticonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
