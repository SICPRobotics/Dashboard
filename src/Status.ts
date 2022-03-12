import { NTStatus } from "./NTClient";

export interface Point {
    x: number,
    y: number
}

export interface VisionRect {
    x: number,
    y: number,
    width: number,
    height: number
}

export interface VisionStatus {
    targetFound: boolean;
    target?: Point;
    bbox?: VisionRect
}

export interface RobotStatus {
    nt: NTStatus
    hood: {
        position?: number
    }
    flywheel: {
        spinning?: boolean
    }
}