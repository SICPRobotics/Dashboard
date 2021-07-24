import { useEffect, useState } from "react";
import { ntClient, pi } from "../main";
import { RobotStatus, VisionStatus } from "../Status";

export function useVisionStatus() {
    const [status, setStatus] = useState<VisionStatus | null>(null);

    useEffect(() => pi.onUpdate(setStatus), []);

    return status;
}

export function useRobotStatus() {
    const [status, setStatus] = useState<RobotStatus | null>(null);

    useEffect(() => ntClient.onUpdate(setStatus));

    return status;
}