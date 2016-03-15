import {Injectable} from "angular2/core";
import {GlobalActionsService} from "../core/globalactions.service";
import {PersistenceService} from "../core/persistence.service";

interface entry {
    timestamp: Date,
    text: string
}

@Injectable()
export class LogService {
    entries: entry[] = [];

    constructor(
        private globalActions: GlobalActionsService,
        private persistenceService: PersistenceService
    ) {
        this.globalActions.saveGame.subscribe(this.saveData);
        this.globalActions.loadGame.subscribe(this.loadData);

        //If log-entries does not exist in localStorage, then add the key
        var entries = this.persistenceService.getItem("log-entries");
        if (entries == undefined) {
            this.saveData();
        }

        this.loadData();
        console.log("Entries: " + this.entries);
        if (this.entries.length == 0) {
            this.addEntry("Default Entry #1");
            this.addEntry("Default Entry #2");
        }
    }

    saveData() {
        console.log("Entries: " + this.entries);
        this.persistenceService.setItem("log-entries", this.entries);
    }

    loadData() {
        var entries = this.persistenceService.getItem("log-entries");
        entries.forEach(entry => {
            entry["timestamp"] = new Date(entry["timestamp"]);
        });
        this.entries = [...entries]
    }

    addEntry(text: string) {
        let newEntry: entry = {"timestamp": new Date(), "text": text};
        this.entries = [...this.entries, newEntry];
    }

    clearEntries() {
        this.entries = [];
        this.saveData();
    }
}



