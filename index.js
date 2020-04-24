const electron = require("electron");
const uuid = require("uuid").v4;
uuid();
const { app, BrowserWindow, Menu, ipcMain } = electron;

let todayWindow;
let createWindow;
let listWindow;
let aboutWindow;

let allAppointment = [];

app.on("ready", () => {
  todayWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    title: "Konverter Suhu"
  });

  todayWindow.loadURL(`file://${__dirname}/today.html`);
  todayWindow.on("closed", () => {
    app.quit();
    todayWindow = null;
  });

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const aboutWindowCreator = () => {
  aboutWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 600,
    height: 400,
    title: "About"
  });

  aboutWindow.setMenu(null);
  aboutWindow.loadURL(`file://${__dirname}/about.html`);
  aboutWindow.on("closed", () => (aboutWindow = null));
};

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "About",
        click() {
          aboutWindowCreator();
        }
      },
      {
        label: "Quit",
        click() {
          app.quit();
        }
      }
    ]
  },

  {
    label: "View",
    submenu: [{ role: "reload" }, { role: "toggledevtools" }]
  }
];
