import React, { useEffect, useRef } from "react"
import { useStatus } from "../../hooks/useStatus"

export const Vision = () => {
    const status = useStatus();

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current!;
        const ctx = canvas.getContext('2d')!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineJoin = 'round';

        if (status?.bbox) {
            

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 6;
            ctx.strokeRect(status.bbox.x, status.bbox.y, status.bbox.width, status.bbox.height);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(status.bbox.x, status.bbox.y, status.bbox.width, status.bbox.height);
        }

        const midX = 160;
        const midY = 90;
        const thiccness = 3;

        ctx.strokeStyle = 'white';
        ctx.lineWidth = thiccness * 2;

        ctx.beginPath();
        ctx.moveTo(midX - (5 + thiccness), midY);
        ctx.lineTo(midX + (5 + thiccness), midY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(midX, midY - (5 + thiccness));
        ctx.lineTo(midX, midY + (5 + thiccness));
        ctx.stroke();

        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 2

        ctx.beginPath();
        ctx.moveTo(midX - 5, midY);
        ctx.lineTo(midX + 5, midY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(midX, midY - 5);
        ctx.lineTo(midX, midY + 5);
        ctx.stroke();

        
    })

    return <div>
        <canvas ref={ref} width={400} height={300} style={{
            background: 'url(http://10.58.22.72/mjpg/video.mjpg)',
        }} />
        { JSON.stringify(status, null, 4) }
    </div>
}