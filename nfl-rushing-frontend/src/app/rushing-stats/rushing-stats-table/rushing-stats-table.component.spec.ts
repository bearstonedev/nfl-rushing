import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushingStatsTableComponent } from './rushing-stats-table.component';

describe('RushingStatsTableComponent', () => {
  let component: RushingStatsTableComponent;
  let fixture: ComponentFixture<RushingStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushingStatsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushingStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
