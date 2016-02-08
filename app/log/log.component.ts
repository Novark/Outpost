import {Component} from "angular2/core";

interface entry {
    timestamp: Date,
    text: string
}

@Component({
    selector: "log",
    template: `
        <div class="log container-fluid">
            <div class="log-entry" *ngFor="#entry of entries">
                <div class="row">
                    <div class="col-md-4 nopadding">[{{entry.timestamp.toLocaleString('en-US')}}]</div>
                    <div class="col-md-8 nopadding">{{entry.text}}</div>
                </div>
            </div>
        </div>
    `
})
export class LogComponent {
    entries: entry[];

    constructor() {
        this.entries = [];
        this.addEntry("Hello World!");
        this.addEntry("Here's another message!  " +
            "This one will be longer than the other one so that it spans multiple lines.  " +
            "In fact, let's make it long enough to span 3 separate lines!");
    }

    addEntry(text: string) {
        this.entries.push({
            "timestamp": new Date(),
            "text": text
        })
    }
}