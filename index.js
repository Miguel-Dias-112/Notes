const { app, BrowserWindow,screen} = require('electron')
const path = require('path')

function createWindow () {
  const  width= screen.getPrimaryDisplay().size.width
  const  height= screen.getPrimaryDisplay().workArea.height


  const win = new BrowserWindow({
    width: 350,
    height: height,
    frame: false,
    transparent: true,
    icon: './icone8.ico' ,// sets window icon
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  win.setPosition(width-350,0)
  // win.setResizable(tr);
  win.loadFile('main.html')
  console.log([width,height])
  win.setResizable(false)

  win.setMovable(false)

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})