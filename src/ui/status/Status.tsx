import React from "react";
import { useRobotStatus, useVisionStatus } from "../../hooks/useStatus";
import { theme } from "../styles";
import { StatusIndicator } from "./StatusIndicator";

export const Status = () => {
    const vision = useVisionStatus();
    const piConn = vision ? (vision.targetFound ? 'ok' : 'noTarget') : 'noConnection'
    const robot = useRobotStatus();
    const robotConn = robot ? 'ok' : 'noConnection'


    return <div style={{
        display: 'flex'
    }}>
        <StatusIndicator color={{
                ok: theme.green,
                noConnection: theme.red
            }[robotConn]}>
            📻 Robot - {{
                ok: 'OK',
                noConnection: 'No connection'
            }[robotConn]}
            
        </StatusIndicator>

        <StatusIndicator color={{
                ok: theme.green,
                noTarget: theme.orange,
                noConnection: theme.red
            }[piConn]}>
            🍇 Pi - {{
                ok: `OK - Target found @ ${vision?.target?.x}, ${vision?.target?.y}`,
                noTarget: 'No target found',
                noConnection: 'No connection'
            }[piConn]}
        </StatusIndicator>
    </div>
}