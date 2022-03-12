import React from "react";

interface Props {
    color: string
    textColor?: string
}

export const StatusIndicator = (props: React.PropsWithChildren<Props>) => <div style={{
    backgroundColor: props.color,
    padding: 5,
    flex: 1,
    color: props.textColor
}}>
    {props.children}
</div>