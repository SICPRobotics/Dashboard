import { SocketManager } from "./SocketManager";
import { Client } from 'wpilib-nt-client';

import { write } from "./write";

export const pi = new SocketManager("ws://wpilibpi.local:5800");
export const ntClient = new NTClient();
ntClient.onUpdate(status => {
    (window as any).ntStatus = status;
    //console.log(status);
});

(window as any).ntClient = ntClient;

import "./ui/App";
import { NTClient } from "./NTClient";

console.log('Reloaded.')