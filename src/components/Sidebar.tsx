import { Link, useLocation } from "react-router-dom";
import { CalendarDays, PenSquare, ListOrdered, Share2, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: CalendarDays, label: "Calendar" },
        { to: "/compose", icon: PenSquare, label: "Post Composer" },
        { to: "/queue", icon: ListOrdered, label: "Scheduled Queue" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ background: "var(--color-accent-primary)", borderRadius: "8px", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}><Share2 size={20} style={{ color: "white" }} /></div>
            <strong style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.5px" }}>Scheduler</strong>
        </div>
        <div style={{ padding: "var(--space-6) var(--space-4)", paddingBottom: 0 }}>
            <Link to="/compose" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "15px" }}><PenSquare size={16} /> New Post</Link>
        </div>
        <nav style={{ padding: "var(--space-6) var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", marginBottom: 8, paddingLeft: "var(--space-2)", letterSpacing: 1 }}>Workspace</div>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: 600, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
