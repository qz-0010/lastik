import {Component, OnInit, ViewChild} from '@angular/core';
import {Event} from "../models/event.model";
import {EventService} from "../services/event.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Event[] = [];
  public mode = {
    edit: null
  };
  constructor(private evService: EventService) { }

  ngOnInit() {
    this.evService.getEvents(events => this.events = this.evService.events);
  }

  onAddEvent(event: Event) {
    this.evService.addEvent(event);
  }

  onEditEvent(event) {
    this.mode.edit = {
      id: event.uuid
    };
  }

  onAddSubmit(form) {
    this.evService.addEvent(form.value);
    form.reset();
  }

  onEditSubmit(event) {
    this.evService.editEvent(event);
  }

  onEditClose(event) {
    this.mode.edit = null;
  }
}
