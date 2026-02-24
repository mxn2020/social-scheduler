import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    posts: defineTable({ text: v.string(), mediaCount: v.number(), scheduledFor: v.string(), status: v.string(), accountIds: v.array(v.id("accounts")) }).index("by_status", ["status"]),
    accounts: defineTable({ platform: v.string(), handle: v.string(), authStatus: v.string() }),
    analytics: defineTable({ postId: v.id("posts"), likes: v.number(), shares: v.number(), impressions: v.number() }).index("by_post", ["postId"])
});
