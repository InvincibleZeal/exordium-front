import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

    transform(events: any, tag: any, search: any, prop: any): any {
        if (!events) return events;
        let filteredEvents = [];
        filteredEvents = events.filter(event => event.tags.includes(tag));

        if (!search) return filteredEvents;
        else return filteredEvents.filter(event => event[prop].toLowerCase().includes(search.toLowerCase()));
    }
}
