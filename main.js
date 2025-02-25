const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // ipcRendererを使うため
    },
  });
  mainWindow.loadFile('index.html');
}

// アプリを閉じる処理
ipcMain.on('close-app', () => {
  app.quit();
});

app.whenReady().then(createWindow);

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
