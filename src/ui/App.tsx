import { Menu } from './Menu';
import React, { useState } from 'react'
import { render } from 'react-dom'
import { root } from './styles';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement);




const App = () => {
    return (
        <div style={root}>
            <Menu/>
        </div>
    )
}

render(<App />, mainElement)
