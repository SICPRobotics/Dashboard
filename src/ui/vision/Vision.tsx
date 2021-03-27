import React, { useEffect, useRef } from "react"
import { useStatus } from "../../hooks/useStatus"

export const Vision = () => {
    const status = useStatus();

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current!;
        const ctx = canvas.getContext('2d')!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (status?.bbox) {
            ctx.lineJoin = 'round';
            
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 6;
            ctx.strokeRect(status.bbox.x, status.bbox.y, status.bbox.width, status.bbox.height);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(status.bbox.x, status.bbox.y, status.bbox.width, status.bbox.height);
        }
    })

    return <div>
        <canvas ref={ref} width={400} height={300} style={{
            background: 'url(http://10.58.22.72/mjpg/video.mjpg)',
        }} />
        { JSON.stringify(status, null, 4) }
    </div>
}