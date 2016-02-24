System.register(["angular2/platform/browser", "angular2/core", "angular2/router", "./app.component", "./core/localstorage.service", "./core/persistence.service", "./log/log.service", "./core/globalactions.service"], function(exports_1) {
    var browser_1, core_1, router_1, app_component_1, localstorage_service_1, persistence_service_1, log_service_1, globalactions_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (localstorage_service_1_1) {
                localstorage_service_1 = localstorage_service_1_1;
            },
            function (persistence_service_1_1) {
                persistence_service_1 = persistence_service_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (globalactions_service_1_1) {
                globalactions_service_1 = globalactions_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                localstorage_service_1.LocalStorageService,
                log_service_1.LogService,
                globalactions_service_1.GlobalActionsService,
                core_1.provide(persistence_service_1.PersistenceService, { useExisting: localstorage_service_1.LocalStorageService })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map