export interface SimpleDrive {
    type: "simpleDrive",
    left: number,
    right: number
}

export interface DriveDistance {
    type: 'driveDistance'
    revolutions: number
    speed: number
}

export interface Wait {
    type: 'wait'
    duration: number
}

export interface RelativeTurn {
    type: 'relativeTurn'
    rotation: number
}

export interface TurnToHeading {
    type: 'turnToHeading'
    heading: number
}

export interface ArmUp {
    type: 'armUp'
}

export interface ArmDown {
    type: 'armDown'
}

export interface Intake {
    type: 'intake'
    direction: 'in' | 'out'
    duration: number
}

const instructionParsers = {
    simpleDrive: ([left, right]: string[]) => {
        return {
            left: Number(left),
            right: Number(right)
        }
    },

    driveDistance: ([distance, speed]: string[]) => {
        return {
            distance: 
        }
    },

    wait: (args: string[]) => {

    },

    relativeTurn: (args: string[]) => {

    },

    turnToHeading: (args: string[]) => {

    },

    armUp: (args: string[]) => {

    },

    armDown: (args: string[]) => {

    },

    intake: (args: string[]) => {

    }
}


export type AutoCode = AutoInstruction[];

export type AutoInstruction = SimpleDrive | DriveDistance | Wait | RelativeTurn | TurnToHeading | ArmUp | ArmDown | Intake;

export function parseAuto(code: string) {
    
}

function parseNumberArg(arg: string) {
    const match = arg.match(/(\d+)(\w*)/);

    if (!match) {
        throw `Failed to parse ${arg} -- no match`
    }
    return {
        number: Number(match[1]),
        units: match[2]
    }
}

function parseDistanceArg(arg: string) {
    const { number, units } = parseNumberArg(arg);

    if (units == 'm') {
        // TODO: convert meters to revolutions
    }
}

function parseTimeArg(arg: string) {
    const { number, units } = parseNumberArg(arg);

    if (units == 's') {
        return number
    } else if (units == 'ms') {
        return number * 0.001
    } else {
        throw `Unknown units ${units}`
    }
}

function parseLine(line: string) {
    const [inst, ...args] = line.split(" ");
}

