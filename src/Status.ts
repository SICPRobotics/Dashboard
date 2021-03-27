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

export interface Status {
    targetFound: boolean;
    target?: Point;
    bbox?: VisionRect
}