const { app, BrowserWindow, ipcMain } = require('electron');

// funciton that create window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
  });
  mainWindow.loadFile('index.html'); // Define HTML file to load
}

// Create window when application is ready
app.whenReady().then(createWindow);

// Process when all windows are closed
app.on('window-all-closed', () => {
  // Quit the app except for macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Processing when an app is activated (for macOS)
app.on('activate', () => {
  // Create a new window if all windows are closed
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});