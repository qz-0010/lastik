import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { SpotsComponent } from './spots/spots.component';
import { SpotItemComponent } from './spots/spot-item/spot-item.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventService} from './services/event.service';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    EventsComponent,
    EventItemComponent,
    SpotsComponent,
    SpotItemComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    // ReactiveFormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
