import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getSelectorFromName } from 'src/test-util';
import { AppComponent } from './app.component';
import { RushingStatsViewComponent } from './rushing-stats/rushing-stats-view/rushing-stats-view.component';
import { RushingStatsModule } from './rushing-stats/rushing-stats.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RushingStatsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render stats view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(getSelectorFromName(RushingStatsViewComponent.name))).toBeTruthy();
  });
});
