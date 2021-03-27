import React from "react";
import { selected, tab } from "./styles";

interface Props {
    onClick: () => void
    selected: boolean
}

export const Tab = (props: React.PropsWithChildren<Props>) => {
    return <span style={{ ...tab, ...(props.selected ? selected : {}) }} onClick={props.onClick}>{props.children}</span>
}