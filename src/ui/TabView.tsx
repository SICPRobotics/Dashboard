import React, { useState } from "react";

type TabsProps<TTabs extends string[], TProps> = TProps & {
    tab: TTabs[number]
    setTab: (tab: TTabs[number]) => void
}

export function withTabs<TTabs extends string[], TProps = {}>(defaultTab: TTabs[number], Component: React.ComponentType<TabsProps<TTabs, TProps>>) {
    return (props: TProps) => {
        const [tab, setTab] = useState<TTabs[number]>(defaultTab);

        return <Component {...props} tab={tab} setTab={setTab} />
    }
}