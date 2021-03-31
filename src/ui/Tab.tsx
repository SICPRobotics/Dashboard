import React from "react";
import { selectedTab, tab } from "./styles";

interface Props {
    onClick: () => void
    selected: boolean
}

export const Tab = (props: React.PropsWithChildren<Props>) => {
    return <span style={{ ...tab, ...(props.selected ? selectedTab : {}) }} onClick={props.onClick}>{props.children}</span>
}