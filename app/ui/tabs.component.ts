import {Component,} from "angular2/core";
import {TabComponent} from "./tab.component";

@Component({
    selector: "tabs",
    template:`
        <ul class="nav nav-tabs">
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
                <a href="#">{{tab.title}}</a>
            </li>
        </ul>
        <ng-content></ng-content>
    `
})
export class TabsComponent {
    tabs: TabComponent[];

    constructor() {
        this.tabs = [];
    }

    selectTab(tab){
        _deactivateAllTabs(this.tabs);
        tab.active = true;

        function _deactivateAllTabs(tabs: TabComponent[]){
            tabs.forEach((tab) => {
                tab.active = false
            });
        }

    }

    addTab(tab: TabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}
