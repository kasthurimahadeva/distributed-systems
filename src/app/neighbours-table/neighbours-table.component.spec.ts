import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighboursTableComponent } from './neighbours-table.component';

describe('NeighboursTableComponent', () => {
  let component: NeighboursTableComponent;
  let fixture: ComponentFixture<NeighboursTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighboursTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighboursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
