import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

    transform(events: any, search: any, prop: any): any {
        if (!events || !search || search === '') return events;

        let filteredEvents = []
        for (let event of events) {
            if (event[prop].toLowerCase().includes(search.toLowerCase()))
                filteredEvents.push(event);
        }
        return filteredEvents;
    }

}
