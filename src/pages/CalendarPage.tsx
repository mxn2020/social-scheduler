import { CalendarDays, ChevronLeft, ChevronRight, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@geenius-ui/react-css";

export default function CalendarPage() {
    const days = Array.from({ length: 35 }, (_, i) => i - 2); // Simulating 35 calendar cells
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><CalendarDays style={{ color: "var(--color-accent-primary)" }} /> October 2026</h1>
            <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                <Button variant="ghost" icon={<ChevronLeft size={20} />} style={{ padding: 8 }} />
                <span style={{ fontWeight: 700, color: "var(--color-text-secondary)" }}>Today</span>
                <Button variant="ghost" icon={<ChevronRight size={20} />} style={{ padding: 8 }} />
            </div>
        </div>

        <div className="calendar-header">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>

        <div className="calendar-grid">
            {days.map((d, i) => (<div key={i} className="calendar-cell" style={{ opacity: d < 1 || d > 31 ? 0.3 : 1 }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "var(--space-2)", textAlign: "right" }}>{d > 0 && d <= 31 ? d : (d <= 0 ? 30 + d : d - 31)}</div>

                {/* Mock Scheduled Posts */}
                {d === 14 && <div style={{ background: "rgba(29, 161, 242, 0.1)", borderLeft: "3px solid #1DA1F2", padding: "4px 8px", borderRadius: "0 4px 4px 0", fontSize: "11px", fontWeight: 600, marginBottom: 4, color: "#1DA1F2", display: "flex", alignItems: "center", gap: 4 }}><Twitter size={10} /> Launch thread...</div>}
                {d === 14 && <div style={{ background: "rgba(10, 102, 194, 0.1)", borderLeft: "3px solid #0A66C2", padding: "4px 8px", borderRadius: "0 4px 4px 0", fontSize: "11px", fontWeight: 600, marginBottom: 4, color: "#0A66C2", display: "flex", alignItems: "center", gap: 4 }}><Linkedin size={10} /> Company update</div>}

                {d === 18 && <div style={{ background: "rgba(59, 89, 152, 0.1)", borderLeft: "3px solid #3B5998", padding: "4px 8px", borderRadius: "0 4px 4px 0", fontSize: "11px", fontWeight: 600, marginBottom: 4, color: "#3B5998", display: "flex", alignItems: "center", gap: 4 }}><Facebook size={10} /> Weekend promo</div>}

                {d === 24 && <div style={{ background: "rgba(29, 161, 242, 0.1)", borderLeft: "3px solid #1DA1F2", padding: "4px 8px", borderRadius: "0 4px 4px 0", fontSize: "11px", fontWeight: 600, marginBottom: 4, color: "#1DA1F2", display: "flex", alignItems: "center", gap: 4 }}><Twitter size={10} /> Feature teaser</div>}
            </div>))}
        </div>
    </div>);
}
