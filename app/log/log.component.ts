import {Component} from "angular2/core";
import {LogService} from "./log.service";

interface entry {
    timestamp: Date,
    text: string
}

@Component({
    selector: "log",
    template: `
        <div class="log container-fluid">
            <div class="log-entry" *ngFor="#entry of _logService.entries">
                <div class="row">
                    <div class="col-md-5 nopadding" style="color: #7799AA">
                        <!--
                        <span class="glyphicon glyphicon-time" aria-hidden="true"
                        style="font-size: 18px;" data-tooltip="tooltip" data-placement="top" title="{{entry.timestamp.toLocaleString('en-US')}}">
                        </span>
                        -->
                        [{{entry.timestamp.toLocaleString('en-US')}}]
                    </div>
                    <div class="col-md-7 nopadding" style="font-weight: bold">{{entry.text}}</div>
                </div>
            </div>
        </div>
    `
})
export class LogComponent {
    constructor(private _logService: LogService) { }
}