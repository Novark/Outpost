System.register(["angular2/core", "./log.service"], function(exports_1) {
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
    var LogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            LogComponent = (function () {
                function LogComponent(_logService) {
                    this._logService = _logService;
                    this.entries = _logService.entries;
                }
                LogComponent = __decorate([
                    core_1.Component({
                        selector: "log",
                        template: "\n        <div class=\"log container-fluid\">\n            <div class=\"log-entry\" *ngFor=\"#entry of entries\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 nopadding\">[{{entry.timestamp.toLocaleString('en-US')}}]</div>\n                    <div class=\"col-md-8 nopadding\">{{entry.text}}</div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], LogComponent);
                return LogComponent;
            })();
            exports_1("LogComponent", LogComponent);
        }
    }
});
//# sourceMappingURL=log.component.js.map