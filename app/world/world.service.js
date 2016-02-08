System.register(["../../node_modules/angular2/core.d"], function(exports_1) {
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
    var core_d_1;
    var WorldService;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            }],
        execute: function() {
            WorldService = (function () {
                function WorldService() {
                }
                WorldService = __decorate([
                    core_d_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WorldService);
                return WorldService;
            })();
            exports_1("WorldService", WorldService);
        }
    }
});
//# sourceMappingURL=world.service.js.map