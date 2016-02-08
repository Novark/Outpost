import {Component} from "angular2/core";
import {TabsComponent} from "./tabs.component";

@Component({
    selector: "tab",
    inputs: [
        "title:tab-title",
        "active"
    ],
    template: `
        <div [hidden]="!active">
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent {
    title: string;
    active = this.active || false;

    constructor(tabs: TabsComponent) {
        tabs.addTab(this);
    }
}