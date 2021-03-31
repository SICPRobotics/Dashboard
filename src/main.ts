import { SocketManager } from "./Pi";

import { write } from "./write";

export const pi = new SocketManager("ws://wpilibpi.local:5800");
export const robot = new SocketManager("ws://robot.url.here");
//pi.onUpdate(status => console.log(status));

import "./ui/App";

console.log('Reloaded.')