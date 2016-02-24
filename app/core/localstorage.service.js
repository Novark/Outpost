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
    var LocalStorageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocalStorageService = (function () {
                function LocalStorageService() {
                }
                LocalStorageService.prototype.getItem = function (key, defaultValue) {
                    if (localStorage.getItem(key)) {
                        if (localStorage.getItem(key) === undefined) {
                            return undefined;
                        }
                        else {
                            return JSON.parse(localStorage.getItem(key));
                        }
                    }
                    else {
                        return defaultValue;
                    }
                };
                LocalStorageService.prototype.setItem = function (key, value) {
                    localStorage.setItem(key, JSON.stringify(value));
                };
                LocalStorageService.prototype.removeItem = function (key) {
                    localStorage.removeItem(key);
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStorageService);
                return LocalStorageService;
            })();
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});
//# sourceMappingURL=localstorage.service.js.map