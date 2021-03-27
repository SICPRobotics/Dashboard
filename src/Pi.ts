import { Status } from "./Status";

export class Pi {
    socket: WebSocket;
    private listeners: ((status: Status) => void)[];
    status: Status | null;

    constructor() {
        this.listeners = [];
        this.status = null;

        this.socket = new WebSocket("ws://wpilibpi.local:5800");
        //this.socket.onopen = () => this.socket.send('{"test":"Hello world!"}');
        this.socket.onerror = console.log;
        this.socket.onmessage = (event) => {
            const status = JSON.parse(event.data).value;

            this.status = status;

            for (const listener of this.listeners.slice()) {
                listener(status);
            }
        }
        this.socket.onclose = () => console.log('Closed')
    }

    onUpdate(fn: (status: Status | null) => void) {
        this.listeners.push(fn);

        fn(this.status);

        return () => {
            this.listeners.splice(this.listeners.indexOf(fn), 1);
        }
    }
}