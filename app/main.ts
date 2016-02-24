import {bootstrap} from "angular2/platform/browser"
import {provide} from "angular2/core";
import {ROUTER_PROVIDERS} from "angular2/router"

import {AppComponent} from "./app.component"
import {LocalStorageService} from "./core/localstorage.service";
import {PersistenceService} from "./core/persistence.service";
import {LogService} from "./log/log.service";
import {GlobalActionsService} from "./core/globalactions.service";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    LocalStorageService,
    LogService,
    GlobalActionsService,
    provide(PersistenceService, {useExisting: LocalStorageService})
]);

