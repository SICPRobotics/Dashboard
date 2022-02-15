import React, { useState } from "react";
import { Status } from "./status/Status";
import { row, theme } from "./styles";
import { Tab } from "./Tab";
import { Vision } from "./vision/Vision";
import { Telemetry } from "./telemetry/Telemetry";

type MenuTabs = ['vision', 'auto', 'telemetry'];
const tabs = ['vision', 'auto', 'telemetry'];

export const Menu = () => {
    const [tab, setTab] = useState('vision');

    const content = {
        main: <span>Main</span>,
        vision: <Vision />,
        telemetry: <Telemetry />
    }[tab];

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    }}>
        <div style={{ ...row, justifyContent: 'center', backgroundColor: theme.darkBg }}>
            {tabs.map(t => <Tab selected={t == tab} onClick={() => setTab(t)}>{t}</Tab>)}
        </div>
        <div style={{
            flexGrow: 1
        }}>
            {content}
        </div>
        <Status />
    </div>
}