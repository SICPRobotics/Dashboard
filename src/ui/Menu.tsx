import React, { useState } from "react";
import { row } from "./styles";
import { Tab } from "./Tab";
import { Vision } from "./vision/Vision";

type MenuTabs = ['main', 'vision'];
const tabs = ['main', 'vision'];

export const Menu = () => {
    const [tab, setTab] = useState('main');

    const content = {
        main: <span>Main</span>,
        vision: <Vision />
    }[tab];

    return <div>
        <div style={row}>
            {tabs.map(t => <Tab selected={t == tab} onClick={() => setTab(t)}>{t}</Tab>)}
        </div>
        {content}
    </div>
}