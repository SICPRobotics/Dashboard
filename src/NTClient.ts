import { Client } from "wpilib-nt-client";
import { Listenable } from "./Listenable";

type NTValue = {
    value: number | string
    type: string
}

interface NTStatus {
    [key: string]: NTValue
}

export class NTClient extends Listenable<NTStatus> {
    status!: NTStatus;
    ntClient!: Client;
    constructor (public uri = 'roborio-5822-frc.local') {
        super();

        this.status = {};

        this.ntClient = new Client();
        this.ntClient.setReconnectDelay(100);
        this.ntClient.start((connected, err) => console.log({ connected, err }), uri);
        this.ntClient.addListener((key, value, valueType, type) => this.update(key, value, valueType, type));
    }

    update(key: string, value: any, valueType: string, type: string) {
        const newStatus = { ...this.status };

        //console.log({ key, value })

        if (type == 'delete') {
            delete newStatus[key];
        } else {
            newStatus[key] = {
                value,
                type: valueType
            }
        }

        this.setStatus(newStatus);
    }
}