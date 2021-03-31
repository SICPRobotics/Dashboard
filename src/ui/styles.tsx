import { CSSProperties } from "react";

export const theme = {
    fg: '#ffffff',
    title: '700 15px "Signika", sans-serif',
    body: '400 13px/0.8 "Segoe UI Symbol", sans-serif',
    selected: '#eb8f34',
    red: '#a61c33',
    green: '#2b8c46',
    orange: '#b37100',
    darkGreen: '#0f381a',
    darkBg: '#100e12',
    bg: '#191622'
}

export const root: CSSProperties = {
    color: theme.fg,
    font: theme.body,
    height: '100%'
}

export const row: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

export const tab: CSSProperties = {
    font: theme.title,
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '10px 10px 0 0',
    
}

export const selectedTab: CSSProperties = {
    color: theme.selected,
    backgroundColor: theme.bg,
}