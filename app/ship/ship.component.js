System.register(["angular2/core", "../log/log.service"], function(exports_1) {
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
    var core_1, log_service_1;
    var ShipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            ShipComponent = (function () {
                function ShipComponent(_logService) {
                    this._logService = _logService;
                }
                ShipComponent.prototype.doClick = function () {
                    this._logService.addEntry("Hello from the Ship!");
                };
                ShipComponent = __decorate([
                    core_1.Component({
                        selector: 'ship',
                        template: "\n        <h1>Ship Page</h1>\n        <p>Ship information...</p>\n        <button type=\"button\" style=\"color: #000000;\" (click)=\"doClick()\">Click Me!</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], ShipComponent);
                return ShipComponent;
            })();
            exports_1("ShipComponent", ShipComponent);
        }
    }
});
//# sourceMappingURL=ship.component.js.map