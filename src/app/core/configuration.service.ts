import { Subject } from 'rxjs';

export class ConfigurationService {
    updateConfig = new Subject();
    constructor() { }
}
