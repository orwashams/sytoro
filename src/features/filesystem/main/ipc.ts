import { ipcMain } from 'electron';
import { readDir, readFile, writeFile, createFolder, openFolderDialog } from './service';

export function registerFilesystemIPC() {
  ipcMain.handle('fs:readDir', (_, dir) => readDir(dir));
  ipcMain.handle('fs:readFile', (_, file) => readFile(file));
  ipcMain.handle('fs:writeFile', (_, file, content) => writeFile(file, content));
  ipcMain.handle('fs:createFolder', (_, parent, name) => createFolder(parent, name));
  ipcMain.handle('fs:openFolderDialog', openFolderDialog);
}
