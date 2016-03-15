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
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(_logService) {
                    this._logService = _logService;
                }
                SettingsComponent.prototype.doLoad = function () {
                    console.log("Loading...");
                    this._logService.loadData();
                };
                SettingsComponent.prototype.doSave = function () {
                    console.log("Saving...");
                    this._logService.saveData();
                };
                SettingsComponent.prototype.doAddEntry = function (text) {
                    console.log("doAddEntry: " + text);
                    this._logService.addEntry(text);
                };
                SettingsComponent.prototype.doClear = function () {
                    console.log("Clearing...");
                    this._logService.clearEntries();
                };
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings',
                        template: "\n        <h1>Settings Page...</h1>\n        <button type=\"button\" style=\"color: #000000;\" (click)=\"doSave()\">Save</button>\n        <button type=\"button\" style=\"color: #000000;\" (click)=\"doLoad()\">Load</button>\n        <button type=\"button\" style=\"color: #000000;\" (click)=\"doClear()\">Clear</button>\n        <br>\n        <input #logEntry type=\"text\"><button type=\"button\" style=\"color: #000000;\" (click)=\"doAddEntry(logEntry.value)\">Add Entry</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], SettingsComponent);
                return SettingsComponent;
            })();
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map