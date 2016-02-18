import {Component} from "angular2/core";
import {OnInit} from "angular2/core";

import {WorldComponent} from "./world/world.component";
import {CraftingComponent} from "./crafting/crafting.component";
import {ShipComponent} from "./ship/ship.component";
import {LogComponent} from "./log/log.component";
import {SettingsComponent} from "./settings/settings.component";

import {TabsComponent} from "./ui/tabs.component";
import {TabComponent} from "./ui/tab.component";


@Component({
    selector: 'outpost-app',
    templateUrl: "./app/templates/app.html",
    directives: [TabsComponent, TabComponent, LogComponent, ShipComponent, SettingsComponent]
})
export class AppComponent implements OnInit {
    public title = "Outpost";
    public universe = {};

    ngOnInit() {
        this.getUniverse();
    }

    getUniverse() {
        this.universe = {
            "id": 12345,
            "galaxies": {}
        };
    }
}

