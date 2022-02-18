import React, { useEffect, useRef, useState } from "react"
import { useRobotStatus, useVisionStatus } from "../../hooks/useStatus"
import { write } from "../../write";
import { theme } from "../styles";
import { MainTabs, TabbedMenu } from "../TabbedMenu";

export const Telemetry = () => {
    const robotStatus = useRobotStatus();
    //let num = 0;

    const ref = useRef<HTMLCanvasElement>(null);
    const [mechanism, changeMechanism] = useState('main');

    useEffect(() => {
        const canvas = ref.current!;
        const ctx = canvas.getContext('2d')!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //num++;
    });

    useEffect(() => {
        ref.current!.addEventListener('mousedown', (e) => {
            const rect = (e.target! as HTMLCanvasElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            write(`${x}, ${y}`);
        })
    }, []);



    return <div>
        <TabbedMenu containedTabs={[{element: <div>test1</div>, name:'test1'},{element: <div>test2</div>, name:'test2'}]} startTab='test1' includeStatus={false}/>
        
        
        
        <canvas ref={ref} width={320} height={240} style={{
            //backgroundColor: '#000000'
        }} />


        <button onClick={() => changeMechanism(mechanism == 'main' ? 'spesific' : 'main')}>
            {mechanism}
        </button>
        <h1>
            Right Motor Turns: {robotStatus ? 1 : 'not connected'}
        </h1>
        <h1>
        Left Motor Turns: {robotStatus?.driveTrain?.leftsideturn ? robotStatus?.driveTrain?.leftsideturn : 'not connected'}
        </h1>
        <h1>Hood: {robotStatus ? robotStatus : 'not connected'}</h1>
        <h1>Flywheel: <span style={{
            color: robotStatus?.flywheel?.spinning ? theme.darkGreen : theme.body
        }}>
            {robotStatus?.flywheel?.spinning ? 'SPINNING' : 0}
        </span></h1>
    </div>
}

