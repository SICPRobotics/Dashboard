import React, { useState } from "react";
import { Status } from "./status/Status";
import { row, theme } from "./styles";
import { Tab } from "./Tab";
import { Vision } from "./vision/Vision";
import { Telemetry } from "./telemetry/Telemetry";

//type MenuTabs = ['vision', 'auto', 'telemetry'];
// const tabs = ['vision', 'auto', 'telemetry'];
interface Tabs{
    containedTabs:Array<TabType>;
    startTab: string;
    includeStatus: boolean;
}
type TabType = {
    element:JSX.Element;
    name:string;
}

const visionTab:TabType = {element: <Vision/>, name: 'vision'}
const telemetryTab:TabType = {element: <Telemetry/>, name: 'telemetry'}
const autoTab:TabType = {element: <div/>, name: 'auto'}
export const MainTabs:Array<TabType> = [visionTab, autoTab, telemetryTab];



export const TabbedMenu = (menuTabs: React.PropsWithChildren<Tabs>) => {
    const [tab, setTab] = useState(menuTabs.startTab);

    const content = {
        main: <span>Main</span>,
        ...menuTabs.containedTabs
    }[tab];

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    }}>
        <div style={{ ...row, justifyContent: 'center', backgroundColor: theme.darkBg }}>
            {menuTabs.containedTabs.map(t => <Tab selected={t.name == tab} onClick={() => setTab(t.name)}>{t}</Tab>)}
        </div>
        <div style={{
            flexGrow: 1
        }}>
            {content}
        </div>
        {menuTabs.includeStatus ? <Status /> : <div/>}
    </div>
}