export abstract class Listenable<T> {
    private listeners!: ((status: T) => void)[];
    abstract status: T;

    onUpdate(fn: (status: T) => void) {
        this.listeners = [];
        this.listeners.push(fn);

        fn(this.status);

        return () => {
            this.listeners.splice(this.listeners.indexOf(fn), 1);
        }
    }

    setStatus(status: T) {
        this.status = status;

        for (const listener of this.listeners.slice()) {
            listener(status);
        }
    }
}