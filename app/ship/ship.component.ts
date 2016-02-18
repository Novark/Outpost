import {Component} from "angular2/core";
import {LogComponent} from "../log/log.component";

@Component({
    selector: 'ship',
    template: `
        <h1>Ship Page</h1>
        <p>Ship information...</p>
        <button type="button" style="color: #000000;">Click Me!</button>
    `
})
export class ShipComponent {

}