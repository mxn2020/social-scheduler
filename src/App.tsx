import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CalendarPage from "./pages/CalendarPage";
import ComposerPage from "./pages/ComposerPage";
import QueuePage from "./pages/QueuePage";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (<div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>{children}</main>
  </div>);
}

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout><CalendarPage /></AppLayout>} />
      <Route path="/compose" element={<AppLayout><ComposerPage /></AppLayout>} />
      <Route path="/queue" element={<AppLayout><QueuePage /></AppLayout>} />
      <Route path="/settings" element={<AppLayout><QueuePage /></AppLayout>} />
    </Routes>
  </BrowserRouter>);
}
