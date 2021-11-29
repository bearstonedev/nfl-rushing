import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getSelectorFromName } from 'src/test-util';
import { RushingStatsTableComponent } from '../rushing-stats-table/rushing-stats-table.component';

import { RushingStatsViewComponent } from './rushing-stats-view.component';

describe('RushingStatsViewComponent', () => {
  let component: RushingStatsViewComponent;
  let fixture: ComponentFixture<RushingStatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        RushingStatsViewComponent, 
        RushingStatsTableComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushingStatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stats table', () => {
    const fixture = TestBed.createComponent(RushingStatsViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(getSelectorFromName(RushingStatsTableComponent.name))).toBeTruthy();
  });
});

