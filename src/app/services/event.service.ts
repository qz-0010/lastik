import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {
  public events: Event[] = [];

  constructor(private http: Http) { }

  getEvents(cb) {
    return this.http.get('/api/v1/event')
      .subscribe(
        (response: Response) => {
          const events: Event[] = response.json();
          this.events = events;
          if(cb) cb(events);
        }
      );
  }

  addEvent(event: Event) {
    return this.http.put('/api/v1/event', event)
      .subscribe(
        (response: Response) => {
          const data: Event = response.json();
          // this.events.unshift(event);
          this.events.push(data);
        },
        (err) => {
        }
      );
  }

  editEvent(event: Event) {
    return this.http.post(`/api/v1/event/${event.uuid}`, event)
      .subscribe(
        (response: Response) => {
          const data: Event = response.json();
          const foundIndex = this.events.findIndex(ev => ev.uuid === data.uuid);
          this.events[foundIndex] = data;
        },
        (err) => {
        }
      );
  }
}
