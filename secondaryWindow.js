const ipcRenderer = require('electron').ipcRenderer

function focusMainWindow() {
	console.log('focus main window')
	ipcRenderer.send('focus-on-main-window')
}