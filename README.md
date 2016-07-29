**Clone and run for a quick way to how you can create new windows and change focus between them**

This is a minimal Electron application that opens a new window and switches focus from the newly created window to the main window. This is done by leveraging the [win.focus() API](http://electron.atom.io/docs/api/browser-window/#winfocus). 


Files explained:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - The main window to render
- `mainWindow.js` - The JS of the main window
- `secondaryWindow.html` - The second window to render
- `mainWindow.js` - The JS of the second window


To run:

# Clone 
$ git clone https://github.com/andypavia/electron-create-window-switch-focus.git

# Go into the repository
$ cd electron-create-window-switch-focus

# Install the dependencies and run
$ npm install && npm start

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).


