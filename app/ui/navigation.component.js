System.register(["angular2/core", "angular2/router"], function(exports_1) {
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
    var core_1, router_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent() {
                    this.navTabs = [
                        { "name": "Ship", "active": true, "route": "Ship" },
                        { "name": "Area", "active": false, "route": "World" },
                        { "name": "Crafting", "active": false, "route": "Crafting" },
                        { "name": "Inventory", "active": false, "route": "Inventory" },
                        { "name": "About", "active": false, "route": "About" }
                    ];
                }
                NavigationComponent.prototype.deselectAll = function () {
                    this.navTabs.forEach(function (tab) {
                        tab.active = false;
                    });
                };
                NavigationComponent.prototype.selectNavItem = function (item) {
                    this.deselectAll();
                    item.active = true;
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'outpost-nav',
                        template: "\n        <ul class=\"nav nav-tabs\">\n            <li role=\"presentation\"\n            *ngFor=\"#tab of navTabs\"\n            [class.active]=\"tab.active\"\n            (click)=\"selectNavItem(tab)\">\n                <!-- <a href=\"{{tab.link}}\">{{tab.name}}</a> -->\n                <a [routerLink]=\"[tab.route]\">{{tab.name}}</a>\n            </li>\n        </ul>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationComponent);
                return NavigationComponent;
            })();
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map