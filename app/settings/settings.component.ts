import {Component} from "angular2/core";
import {LogService} from "../log/log.service";

@Component({
    selector: 'settings',
    template: `
        <h1>Settings Page...</h1>
        <button type="button" style="color: #000000;" (click)="doSave()">Save</button>
        <button type="button" style="color: #000000;" (click)="doLoad()">Load</button>
        <button type="button" style="color: #000000;">Clear</button>
    `,
})
export class SettingsComponent {
    constructor(private _logService: LogService) { }

    doLoad() {
        console.log("Loading...");
        this._logService.loadData();
    }

    doSave() {
        console.log("Saving...")
        this._logService.saveData();
    }
}