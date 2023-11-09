import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggablesComponent } from './draggables.component';

describe('DraggablesComponent', () => {
  let component: DraggablesComponent;
  let fixture: ComponentFixture<DraggablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
