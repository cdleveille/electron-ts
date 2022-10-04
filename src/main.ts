import "dotenv/config";

import { app, BrowserWindow, shell } from "electron";
import * as path from "path";
import { argv } from "process";

let commandLineUrl;
if (app.commandLine.hasSwitch("url")) {
	commandLineUrl = app.commandLine.getSwitchValue("url");
}

const DEFAULT_URL = "https://www.electronjs.org";
const URL = commandLineUrl || argv[2] || process.env.URL || DEFAULT_URL;

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1400,
		height: 1000,
		show: false,
		webPreferences: {
			devTools: false,
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js")
		}
	});

	mainWindow.loadURL(URL);
	mainWindow.removeMenu();
	mainWindow.once("ready-to-show", () => {
		mainWindow.maximize();
		mainWindow.show();
	});
	// @ts-ignore
	mainWindow.webContents.setWindowOpenHandler(({ url }) => {
		shell.openExternal(url);
	});
};

app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
