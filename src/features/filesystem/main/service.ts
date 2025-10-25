import fs from 'fs';
import path from 'path';
import { dialog } from 'electron';

export interface FileInfo {
  name: string;
  path: string;
  isDir: boolean;
}

export function readDir(dirPath: string): FileInfo[] {
  return fs.readdirSync(dirPath).map((name) => {
    const full = path.join(dirPath, name);
    const stats = fs.statSync(full);
    return { name, path: full, isDir: stats.isDirectory() };
  });
}

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

export function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, 'utf-8');
}

export function createFolder(parent: string, name: string) {
  fs.mkdirSync(path.join(parent, name));
}

export function openFolderDialog() {
  const result = dialog.showOpenDialogSync({ properties: ['openDirectory'] });
  if (result) return result[0];
  return null;
}
