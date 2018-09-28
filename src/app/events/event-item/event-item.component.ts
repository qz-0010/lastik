import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../models/event.model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  @Input() event: Event;
  @Input() mode: object;
  @Output() eventEdit = new EventEmitter<Event>();
  @Output() editFormSubmit = new EventEmitter<Event>();
  @Output() editFormClose = new EventEmitter<Event>();

  constructor() {

  }

  onEdit(event: Event) {
    this.eventEdit.emit(event);
  }

  onEditFormSubmit(event: Event) {
    this.editFormSubmit.emit(event);
  }

  onEditFormClose(event: Event) {
    this.editFormClose.emit(event);
  }
}
