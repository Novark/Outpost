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
                    //If log-entries does not exist in localStorage, then add the key
                    var entries = this.persistenceService.getItem("log-entries");
                    if (entries == undefined) {
                        this.saveData();
                    }
                    this.loadData();
                    console.log("Loaded Entries: " + this.entries);
                    if (this.entries.length == 0) {
                        this.addEntry("Default Entry #1");
                        this.addEntry("Default Entry #2");
                    }
                }
                LogService.prototype.saveData = function () {
                    this.persistenceService.setItem("log-entries", this.entries);
                };
                LogService.prototype.loadData = function () {
                    var entries = this.persistenceService.getItem("log-entries");
                    entries.forEach(function (entry) {
                        entry["timestamp"] = new Date(entry["timestamp"]);
                    });
                    this.entries = entries.slice();
                };
                LogService.prototype.addEntry = function (text) {
                    var newEntry = { "timestamp": new Date(), "text": text };
                    this.entries = this.entries.concat([newEntry]);
                };
                LogService.prototype.clearEntries = function () {
                    this.entries = [];
                    this.saveData();
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