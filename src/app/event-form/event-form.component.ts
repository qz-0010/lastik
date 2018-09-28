import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Event} from "../models/event.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @ViewChild('fAdd') addForm: NgForm;
  @ViewChild('fEdit') editForm: NgForm;
  @Input() mode = <string>'add';
  @Input() event: Event;
  @Output() addFormSubmit = new EventEmitter<NgForm>();
  @Output() editFormSubmit = new EventEmitter<Event>();
  @Output() closeEdit = new EventEmitter<Event>();

  inputs = [
    {
      type: 'text',
      name: 'title',
      placeholder: 'title'
    },
    {
      type: 'text',
      name: 'summary',
      placeholder: 'summary'
    },
    {
      type: 'text',
      name: 'duration',
      placeholder: 'duration'
    },
    {
      type: 'text',
      name: 'description',
      placeholder: 'description'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddSubmit() {
    this.addFormSubmit.emit(this.addForm);
  }

  onEditSubmit(uuid) {
    const data = <Event>{uuid, ...this.editForm.value};
    this.editFormSubmit.emit(data);
    this.closeEdit.emit(data);
  }

  onCloseEdit(event) {
    this.closeEdit.emit(event);
  }
}
