const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1130,
        height: 685,
        minWidth: 1070,
        minHeight: 600,
        resizable: true,
        show: true,
        alwaysOnTop: false,
        frame: true,
        title: 'AnimationCreator',
        icon: path.join(__dirname, 'logo.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false // Enable DevTools
        }
    });

    mainWindow.setMenuBarVisibility(false); // Hide the menu bar
    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});