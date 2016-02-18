System.register(["angular2/core", "./ship/ship.component", "./log/log.component", "./settings/settings.component", "./ui/tabs.component", "./ui/tab.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ship_component_1, log_component_1, settings_component_1, tabs_component_1, tab_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ship_component_1_1) {
                ship_component_1 = ship_component_1_1;
            },
            function (log_component_1_1) {
                log_component_1 = log_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Outpost";
                    this.universe = {};
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getUniverse();
                };
                AppComponent.prototype.getUniverse = function () {
                    this.universe = {
                        "id": 12345,
                        "galaxies": {}
                    };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'outpost-app',
                        templateUrl: "./app/templates/app.html",
                        directives: [tabs_component_1.TabsComponent, tab_component_1.TabComponent, log_component_1.LogComponent, ship_component_1.ShipComponent, settings_component_1.SettingsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map