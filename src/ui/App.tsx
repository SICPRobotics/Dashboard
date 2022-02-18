import { Menu } from './Menu';
import React, { useState } from 'react'
import { render } from 'react-dom'
import { root } from './styles';
import {MainTabs, TabbedMenu} from './TabbedMenu';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement);

mainElement.style.height = '100%';


const App = () => {
    return (
        <div style={root}>
            <TabbedMenu containedTabs={MainTabs} startTab={'vision'} includeStatus={true}/>
        </div>
    )
}

render(<App />, mainElement)
