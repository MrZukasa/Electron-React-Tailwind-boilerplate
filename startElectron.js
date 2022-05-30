const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200, 
        height: 800,
        webPreferences: {
            nodeIntegration : true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
}

require('electron-reload')(__dirname,{
    electron : path.join(__dirname, 'node_modules', '.bin' , 'electron')
})

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })