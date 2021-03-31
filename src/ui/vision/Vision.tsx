import React, { useEffect, useRef } from "react"
import { useVisionStatus } from "../../hooks/useStatus"
import { write } from "../../write";

export const Vision = () => {
    const status = useVisionStatus();

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

        /*const midX = 160;
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
        ctx.stroke();*/

        
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
        <canvas ref={ref} width={320} height={240} style={{
            background: 'url(http://10.58.22.72/mjpg/video.mjpg)',
        }} />
        { JSON.stringify(status, null, 4) }
    </div>
}