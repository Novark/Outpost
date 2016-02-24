import {Injectable} from "angular2/core";

@Injectable()
export class LocalStorageService {
    getItem(key: string, defaultValue?: any): any {
        if (localStorage.getItem(key)) {
            if (localStorage.getItem(key) === undefined) {
                return undefined;
            } else {
                return JSON.parse(localStorage.getItem(key));
            }
        } else {
            return defaultValue;
        }
    }

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}




