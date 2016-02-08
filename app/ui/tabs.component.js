System.register(["angular2/core"], function(exports_1) {
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
    var core_1;
    var TabsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabsComponent = (function () {
                function TabsComponent() {
                    this.tabs = [];
                }
                TabsComponent.prototype.selectTab = function (tab) {
                    _deactivateAllTabs(this.tabs);
                    tab.active = true;
                    function _deactivateAllTabs(tabs) {
                        tabs.forEach(function (tab) {
                            tab.active = false;
                        });
                    }
                };
                TabsComponent.prototype.addTab = function (tab) {
                    if (this.tabs.length === 0) {
                        tab.active = true;
                    }
                    this.tabs.push(tab);
                };
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: "tabs",
                        template: "\n        <ul class=\"nav nav-tabs\">\n            <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n                <a href=\"#\">{{tab.title}}</a>\n            </li>\n        </ul>\n        <ng-content></ng-content>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsComponent);
                return TabsComponent;
            })();
            exports_1("TabsComponent", TabsComponent);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map