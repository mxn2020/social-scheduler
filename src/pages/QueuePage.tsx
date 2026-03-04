import { ListOrdered, Clock, Twitter, Linkedin, MoreVertical } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const queue = [
    { id: "1", text: "Launch day is finally here! We've been working on this for 6 months... 🚀", time: "Today at 9:00 AM", platform: "Twitter", icon: Twitter, color: "#1DA1F2", status: "Scheduled" },
    { id: "2", text: "We are excited to announce our $2M seed round led by amazing partners.", time: "Tomorrow at 10:00 AM", platform: "LinkedIn", icon: Linkedin, color: "#0A66C2", status: "Scheduled" },
    { id: "3", text: "Behind the scenes look at our deployment process. A thread 🧵👇", time: "Oct 24 at 2:00 PM", platform: "Twitter", icon: Twitter, color: "#1DA1F2", status: "Draft" }
];

export default function QueuePage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><ListOrdered style={{ color: "var(--color-accent-primary)" }} /> Scheduled Queue</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {queue.map(q => (<Card key={q.id} padding="none" style={{ display: "flex", alignItems: "stretch", overflow: "hidden", borderLeft: `4px solid ${q.color}` }}>
                <div style={{ padding: "var(--space-5)", width: 180, borderRight: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-text-secondary)", fontSize: "13px", fontWeight: 600, marginBottom: 8 }}><Clock size={14} /> {q.time}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: q.color, fontSize: "14px", fontWeight: 700 }}><q.icon size={16} /> {q.platform}</div>
                </div>
                <div style={{ padding: "var(--space-5)", flex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <p style={{ fontSize: "16px", color: "var(--color-text-primary)", lineHeight: 1.6, margin: 0 }}>{q.text}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: q.status === "Scheduled" ? "rgba(16,185,129,0.1)" : "var(--color-bg-tertiary)", color: q.status === "Scheduled" ? "#10B981" : "var(--color-text-secondary)" }}>{q.status}</span>
                        <Button variant="ghost" size="sm" icon={<MoreVertical size={18} />} style={{ padding: 4 }} />
                    </div>
                </div>
            </Card>))}
        </div>
    </div>);
}
