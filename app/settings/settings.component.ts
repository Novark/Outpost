import {Component} from "angular2/core";

@Component({
    selector: 'settings',
    template: `
        <h1>Settings Page...</h1>
        <button type="button" style="color: #000000;">Save</button>
        <button type="button" style="color: #000000;">Load</button>
        <button type="button" style="color: #000000;">Clear</button>
    `
})
export class SettingsComponent {

}