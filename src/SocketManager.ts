import { Listenable } from "./Listenable";
import { VisionStatus } from "./Status";

export class SocketManager extends Listenable<VisionStatus | null> {
    socket!: WebSocket;

    status!: VisionStatus | null;

    constructor(public address: string) {
        super();

        this.status = null;

        this.start();
    }

    start() {
        this.socket = new WebSocket(this.address);
        this.socket.onerror = console.log;
        this.socket.onmessage = (event) => {
            const status = JSON.parse(event.data).value;

            this.setStatus(status);
        }
        this.socket.onclose = () => setTimeout(() => this.start(), 1000);
    }
}