import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import CalendarPage from "../pages/CalendarPage"; import ComposerPage from "../pages/ComposerPage"; import QueuePage from "../pages/QueuePage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Scheduler")).toBeInTheDocument(); });
    it("CalendarPage renders", () => { wrap(<CalendarPage />); expect(screen.getAllByText("October 2026")[0]).toBeInTheDocument(); });
    it("ComposerPage renders", () => { wrap(<ComposerPage />); expect(screen.getByText("Create New Post")).toBeInTheDocument(); });
    it("QueuePage renders", () => { wrap(<QueuePage />); expect(screen.getAllByText("Scheduled Queue")[0]).toBeInTheDocument(); });
});
