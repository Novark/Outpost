import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";


//Defines a single tab in a navigation bar
interface INavTab {
    name: string,
    route: string,
    active: boolean
}

@Component({
    selector: 'outpost-nav',
    template: `
        <ul class="nav nav-tabs">
            <li role="presentation"
            *ngFor="#tab of navTabs"
            [class.active]="tab.active"
            (click)="selectNavItem(tab)">
                <!-- <a href="{{tab.link}}">{{tab.name}}</a> -->
                <a [routerLink]="[tab.route]">{{tab.name}}</a>
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    navTabs: INavTab[] = [
        {"name": "Ship", "active": true, "route": "Ship"},
        {"name": "Area", "active": false, "route": "World"},
        {"name": "Crafting", "active": false, "route": "Crafting"},
        {"name": "Inventory", "active": false, "route": "Inventory"},
        {"name": "About", "active": false, "route": "About"}
    ];

    deselectAll() {
        this.navTabs.forEach(function(tab) {
            tab.active = false;
        });
    }

    selectNavItem(item) {
        this.deselectAll();
        item.active = true;
    }
}




