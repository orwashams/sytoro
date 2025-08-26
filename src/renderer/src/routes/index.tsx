import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <div className="p-2 ">
      <h3>Welcome Home!</h3>
      <div className="action">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
    </div>
  )
}
