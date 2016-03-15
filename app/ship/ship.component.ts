import {Component} from "angular2/core";
import {LogComponent} from "../log/log.component";
import {LogService} from "../log/log.service";

@Component({
    selector: 'ship',
    template: `
        <h1>Ship Page</h1>
        <p>Ship information...</p>
        <button type="button" style="color: #000000;" (click)="doClick()">Click Me!</button>
    `
})
export class ShipComponent {
    constructor(private _logService: LogService) { }

    doClick() {
        this._logService.addEntry("Hello from the Ship!")
    }

}