import {Injectable, Output, EventEmitter} from "angular2/core";

@Injectable()
export class GlobalActionsService {
    @Output() saveGame: EventEmitter<any> = new EventEmitter();
    @Output() loadGame: EventEmitter<any> = new EventEmitter();

    doSaveGame() {
        this.saveGame.emit(null);
    }

    doLoadGame() {
        this.loadGame.emit(null);
    }

}