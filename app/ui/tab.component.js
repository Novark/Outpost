System.register(["angular2/core", "./tabs.component"], function(exports_1) {
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
    var core_1, tabs_component_1;
    var TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent(tabs) {
                    this.active = this.active || false;
                    tabs.addTab(this);
                }
                TabComponent = __decorate([
                    core_1.Component({
                        selector: "tab",
                        inputs: [
                            "title:tab-title",
                            "active"
                        ],
                        template: "\n        <div [hidden]=\"!active\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [tabs_component_1.TabsComponent])
                ], TabComponent);
                return TabComponent;
            })();
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=tab.component.js.map