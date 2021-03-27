import { CSSProperties } from "react";

export const theme = {
    fg: '#ffffff',
    title: '"Signika", serif',
    body: 'sans-serif',
    selected: '#eb8f34'
}

export const root: CSSProperties = {
    color: theme.fg,
    font: `15px ${theme.body}`,
}

export const row: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

export const tab: CSSProperties = {
    font: `15px ${theme.title}`,
    cursor: 'pointer',
    padding: '10px'
}

export const selected: CSSProperties = {
    color: theme.selected
}