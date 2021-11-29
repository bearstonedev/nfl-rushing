import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RushingStatsModule } from './rushing-stats/rushing-stats.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RushingStatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
