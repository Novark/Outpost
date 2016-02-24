import {Injectable, OnInit} from "angular2/core";
import {GlobalActionsService} from "../core/globalactions.service";
import {PersistenceService} from "../core/persistence.service";

interface entry {
    timestamp: Date,
    text: string
}

@Injectable()
export class LogService implements OnInit {
    entries: entry[];

    constructor(
        private globalActions: GlobalActionsService,
        private persistenceService: PersistenceService
    ) {
        this.globalActions.saveGame.subscribe(this.saveData);
        this.globalActions.loadGame.subscribe(this.loadData);
    }

    ngOnInit() {
        this.addEntry({"timestamp": new Date(), "text": "Hi there!"});
        this.addEntry({"timestamp": new Date(), "text": "Hi there!"});
    }

    saveData() {
        console.log("Entries: " + this.entries);
        this.persistenceService.setItem("log-entries", this.entries);
    }

    //TODO
    loadData() {
        console.log(this.persistenceService.getItem("log-entries"));
    }

    //TODO
    addEntry(logEntry: entry) {
        console.log("[" + logEntry.timestamp + "]: " + logEntry.text);
        this.entries = [...this.entries, logEntry];
    }

    clearLog() {
        this.entries = [];
    }
}



