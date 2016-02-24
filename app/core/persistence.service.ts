import {Injectable} from "angular2/core";

@Injectable()
export class PersistenceService {
    //Overridden in the bootstrap process
    getItem(key: string, defaultValue?: any): any { }
    setItem(key: string, value: any): void { }
    removeItem(key: string): void { }
}
