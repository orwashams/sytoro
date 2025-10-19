import { createFileRoute } from '@tanstack/react-router';
// import {} from '@renderer/components/versions'
import { AppSidebar } from '@renderer/components/ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@renderer/components/ui/sidebar';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    // <div className="p-2 ">
    //   {/* <Button onClick={ipcHandle}>Send IPC</Button> */}
    //   <h3>Welcome Home!</h3>
    // </div>

    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
