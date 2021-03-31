import { VisionStatus } from "./Status";

export class SocketManager {
    socket!: WebSocket;
    private listeners: ((status: VisionStatus) => void)[];
    status: VisionStatus | null;

    constructor(public address: string) {
        this.listeners = [];
        this.status = null;

        this.start();
    }

    start() {
        this.socket = new WebSocket(this.address);
        this.socket.onerror = console.log;
        this.socket.onmessage = (event) => {
            const status = JSON.parse(event.data).value;

            this.status = status;

            for (const listener of this.listeners.slice()) {
                listener(status);
            }
        }
        this.socket.onclose = () => setTimeout(() => this.start(), 1000);
    }

    onUpdate(fn: (status: VisionStatus | null) => void) {
        this.listeners.push(fn);

        fn(this.status);

        return () => {
            this.listeners.splice(this.listeners.indexOf(fn), 1);
        }
    }
}