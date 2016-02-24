System.register(["angular2/core", "../core/globalactions.service", "../core/persistence.service"], function(exports_1) {
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
    var core_1, globalactions_service_1, persistence_service_1;
    var LogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (globalactions_service_1_1) {
                globalactions_service_1 = globalactions_service_1_1;
            },
            function (persistence_service_1_1) {
                persistence_service_1 = persistence_service_1_1;
            }],
        execute: function() {
            LogService = (function () {
                function LogService(globalActions, persistenceService) {
                    this.globalActions = globalActions;
                    this.persistenceService = persistenceService;
                    this.entries = [];
                    this.globalActions.saveGame.subscribe(this.saveData);
                    this.globalActions.loadGame.subscribe(this.loadData);
                    this.addEntry({ "timestamp": new Date(), "text": "Hi there!" });
                    this.addEntry({ "timestamp": new Date(), "text": "Hello again!" });
                }
                LogService.prototype.saveData = function () {
                    console.log("Entries: " + this.entries);
                    this.persistenceService.setItem("log-entries", this.entries);
                };
                //TODO
                LogService.prototype.loadData = function () {
                    console.log(this.persistenceService.getItem("log-entries"));
                };
                //TODO
                LogService.prototype.addEntry = function (logEntry) {
                    console.log("[" + logEntry.timestamp + "]: " + logEntry.text);
                    this.entries = this.entries.concat([logEntry]);
                };
                LogService.prototype.clearLog = function () {
                    this.entries = [];
                };
                LogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [globalactions_service_1.GlobalActionsService, persistence_service_1.PersistenceService])
                ], LogService);
                return LogService;
            })();
            exports_1("LogService", LogService);
        }
    }
});
//# sourceMappingURL=log.service.js.map