import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 700,
        backgroundColor: '#191622',
        webPreferences: {
           nodeIntegration: true
        },
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'icon.png'),
        title: 'Wolfbyte Dashboard',
    });


    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:4000');
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, 'renderer/index.html'),
                protocol: 'file:',
                slashes: true
            })
        )
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)
    .whenReady()
    .then(() => {
        if (process.env.NODE_ENV === 'development') {
            installExtension(REACT_DEVELOPER_TOOLS)
                .then((name: any) => console.log(`Added Extension:  ${name}`))
                .catch((err: any) => console.log('An error occurred: ', err))
            installExtension(REDUX_DEVTOOLS)
                .then((name: any) => console.log(`Added Extension:  ${name}`))
                .catch((err: any) => console.log('An error occurred: ', err))
        }
    })
//app.allowRendererProcessReuse = true
