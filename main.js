const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 150,
    height: 100,
    alwaysOnTop: true,
    transparent: true,
    hasShadow: false,
    resizable: false,
    backgroundColor: "#00000000",
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    frame: false,
  });

  win.loadFile("./index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
