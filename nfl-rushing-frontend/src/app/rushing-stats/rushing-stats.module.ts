import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RushingStatsViewComponent } from './rushing-stats-view/rushing-stats-view.component';
import { RushingStatsTableComponent } from './rushing-stats-table/rushing-stats-table.component';



@NgModule({
  declarations: [
    RushingStatsViewComponent,
    RushingStatsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RushingStatsViewComponent
  ]
})
export class RushingStatsModule { }
