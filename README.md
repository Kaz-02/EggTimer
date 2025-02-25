# EggTimer 


Clone and run for a quick way to see Electron in action.

This is a minimal Electron application based on the Quick Start Guide within the Electron documentation.

A basic Electron application needs just these files:

package.json - Points to the app's main file and lists its details and dependencies.
main.js - Starts the app and creates a browser window to render HTML. This is the app's main process.
index.html - A web page to render. This is the app's renderer process.
preload.js - A content script that runs before the renderer process loads.
You can learn more about each of these components in depth within the Tutorial.

To Use
To clone and run this repository you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
Note: If you're using Linux Bash for Windows, see this guide or use node from the command prompt.

Resources for Learning Electron
electronjs.org/docs - all of Electron's documentation
Electron Fiddle - Electron Fiddle, an app to test small Electron experiments
