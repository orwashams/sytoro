// src/core/main/ipc.ts
// import { registerIPC as registerAuth } from '@features/auth/main/auth.ipc';
// import { registerIPC as registerSettings } from '@features/settings/main/settings.ipc';
// add future features here...

import { registerFilesystemIPC } from '@features/filesystem/main/ipc';

export function registerFeatureIPC(): void {
  //   registerAuth();
  //   registerSettings();
  registerFilesystemIPC();
  console.log('✅ All feature IPC handlers registered');
}
