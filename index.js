const electron = require("electron");
const uuid = require("uuid").v4;
uuid();
const fs = require("fs");
const { app, BrowserWindow, Menu, ipcMain } = electron;

let todayWindow;
let createWindow;
let listWindow;
let aboutWindow;
let historyWindow;


let allAppointment = [];
fs.readFile("db.json", (err, jsonAppointment) => {
    if(!err)
    {
        const oldAppointment = JSON.parse(jsonAppointment)
        allAppointment = oldAppointment
    }
});

app.on("ready", () => {
  todayWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    title: "Konverter Suhu"
  });

  todayWindow.loadURL(`file://${__dirname}/today.html`);
  todayWindow.on("closed", () => {
    const jsonAppointment = JSON.stringify(allAppointment)
    fs.writeFileSync('db.json', jsonAppointment)

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

const historyWindowCreator = () => {
  historyWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 600,
    height: 400,
    title: "History"
  });

  historyWindow.setMenu(null);
  historyWindow.loadURL(`file://${__dirname}/history.html`);
  historyWindow.on("closed", () => (historyWindow = null));
};

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "History",
        click() {
          historyWindowCreator();
        }
      },
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
