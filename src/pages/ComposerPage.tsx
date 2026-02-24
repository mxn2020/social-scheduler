import { Sparkles, Calendar, Image as ImageIcon, Smile, Twitter, Linkedin, Facebook } from "lucide-react";
export default function ComposerPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200, display: "flex", gap: "var(--space-6)" }}>
        {/* Composer Area */}
        <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 800, marginBottom: "var(--space-6)" }}>Create New Post</h1>

            <div style={{ display: "flex", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
                <button className="btn card" style={{ borderColor: "#1DA1F2", background: "rgba(29, 161, 242, 0.05)", color: "#1DA1F2", flex: 1 }}><Twitter size={18} /> Twitter</button>
                <button className="btn card" style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)", flex: 1 }}><Linkedin size={18} /> LinkedIn</button>
                <button className="btn card" style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)", flex: 1 }}><Facebook size={18} /> Facebook</button>
            </div>

            <div className="card" style={{ overflow: "hidden", marginBottom: "var(--space-6)" }}>
                <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-bg-secondary)" }}>
                    <div style={{ display: "flex", gap: "var(--space-2)" }}>
                        <button className="btn btn-ghost btn-sm"><ImageIcon size={18} /></button>
                        <button className="btn btn-ghost btn-sm"><Smile size={18} /></button>
                    </div>
                    <button className="btn btn-sm" style={{ color: "#8B5CF6", borderColor: "#8B5CF6", background: "rgba(139, 92, 246, 0.1)" }}><Sparkles size={14} /> AI Rewrite</button>
                </div>
                <textarea className="textarea" placeholder="What do you want to share with your audience?" style={{ border: "none", borderRadius: 0, minHeight: 200, fontSize: "16px", background: "transparent" }}></textarea>
                <div style={{ padding: "var(--space-3) var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "var(--color-text-secondary)" }}>
                    <span>0/280 characters</span>
                    <span style={{ color: "#1DA1F2", fontWeight: 600 }}>Twitter requires short posts</span>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="card" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", padding: "4px 16px", borderRadius: 999, background: "var(--color-bg-secondary)" }}>
                    <Calendar size={18} style={{ color: "var(--color-text-tertiary)" }} />
                    <input type="datetime-local" className="input" style={{ border: "none", background: "transparent", padding: 0, boxShadow: "none", width: "auto", fontWeight: 600 }} defaultValue="2026-10-24T09:00" />
                </div>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    <button className="btn">Save as Draft</button>
                    <button className="btn btn-primary">Schedule Post</button>
                </div>
            </div>
        </div>

        {/* Preview Area */}
        <div style={{ width: 400 }}>
            <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)", letterSpacing: 1 }}>Preview</h3>

            <div className="card" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-bg-tertiary)" }}></div>
                    <div>
                        <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>Acme Corp</div>
                        <div style={{ fontSize: "14px", color: "var(--color-text-tertiary)" }}>@acmecorp</div>
                    </div>
                    <Twitter style={{ marginLeft: "auto", color: "#1DA1F2" }} />
                </div>
                <div style={{ color: "var(--color-text-primary)", fontSize: "15px", lineHeight: 1.6 }}>
                    What do you want to share with your audience?
                </div>
            </div>
        </div>
    </div>);
}
