import { useEffect, useState } from "react";
import { pi } from "../main";
import { Status } from "../Status";

export function useStatus() {
    const [status, setStatus] = useState<Status | null>(null);

    useEffect(() => pi.onUpdate(setStatus));

    return status;
}