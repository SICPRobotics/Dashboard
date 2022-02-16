import { Client } from "wpilib-nt-client";
import { Listenable } from "./Listenable";
import { RobotStatus } from "./Status";

type NTValue = {
    value: any
    type: string
}

export interface NTStatus {
    table: {
        [key: string]: NTValue
    }
    connected: boolean
    error?: string
}

export class NTClient extends Listenable<NTStatus> {
    status!: NTStatus;
    ntClient!: Client;
    constructor (public uri = 'roborio-5822-frc.local') {
        super();

        this.status = {
            table: {},
            connected: false
        };

        this.ntClient = new Client();
        this.start();
        this.ntClient.setReconnectDelay(100);
        this.ntClient.addListener((key, value, valueType, type) => this.update(key, value, valueType as string, type));
    }

    connect() {
        console.log('trying to connect...')
        return new Promise<void>(resolve => {
            this.ntClient.start((connected, err) => {
                let error;
                if (err) {
                    error = `${err.name}: ${err.message}`;
                    console.error(err);
                }
                this.setStatus({ ...this.status, connected, error });
                resolve();
            }, this.uri);
        });
    }

    async start() {
        if (!this.status.connected) {
            await this.connect();
        }

        const time = this.status.connected ? 10000 : 1000;

        setTimeout(() => this.start(), time);
    }

    update(key: string, value: any, valueType: string, type: string) {
        const newTable = { ...this.status.table };

        //console.log({ key, value })

        if (type == 'delete') {
            delete newTable[key];
        } else {
            newTable[key] = {
                value,
                type: valueType
            }
        }

        this.setStatus({ ...this.status, table: newTable });
    }

    getRobotStatus(): RobotStatus | null {
        if (!this.status.connected) {
            return null;
        }

        return {
            nt: this.status,
            driveTrain:{
                rightsideturn: this.status.table['/SmartDashboard/Right Motor Position']?.value as number,
                leftsideturn: this.status.table['/SmartDashboard/Left Motor Position']?.value as number
            },
            hood: {
                position: this.status.table['/SmartDashboard/Hood Position']?.value as number
            },
            flywheel: {
                spinning: this.status.table['/SmartDashboard/FlywheelSpinning']?.value as boolean
            }
        }
    }
}