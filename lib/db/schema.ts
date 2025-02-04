import { sql } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  real,
  primaryKey,
} from "drizzle-orm/sqlite-core";

// Users table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  password: text("password").notNull(),
  role: text("role", { enum: ["admin", "user", "manager"] }).default("user"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Organizations table
export const organizations = sqliteTable("organizations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  plan: text("plan", { enum: ["starter", "pro", "enterprise"] }).default(
    "starter"
  ),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Organization Members table (many-to-many relationship)
export const organizationMembers = sqliteTable(
  "organization_members",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id),
    role: text("role", { enum: ["owner", "admin", "member"] }).default(
      "member"
    ),
  },
  (table) => ({
    pk: primaryKey(table.userId, table.organizationId),
  })
);

// Scorecards table
export const scorecards = sqliteTable("scorecards", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Objectives table
export const objectives = sqliteTable("objectives", {
  id: text("id").primaryKey(),
  scorecardId: text("scorecard_id")
    .notNull()
    .references(() => scorecards.id),
  name: text("name").notNull(),
  description: text("description"),
  target: real("target"),
  current: real("current"),
  perspective: text("perspective", {
    enum: ["financial", "customer", "internal", "learning"],
  }).notNull(),
  status: text("status", {
    enum: ["on_track", "at_risk", "off_track"],
  }).default("on_track"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Assessments table
export const assessments = sqliteTable("assessments", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  type: text("type", {
    enum: ["self", "peer", "manager", "subordinate"],
  }).notNull(),
  status: text("status", {
    enum: ["draft", "in_progress", "completed"],
  }).default("draft"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  completedAt: integer("completed_at", { mode: "timestamp" }),
});

// Assessment Responses table
export const assessmentResponses = sqliteTable("assessment_responses", {
  id: text("id").primaryKey(),
  assessmentId: text("assessment_id")
    .notNull()
    .references(() => assessments.id),
  questionId: text("question_id").notNull(),
  response: text("response").notNull(),
  score: integer("score"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Action Plans table
export const actionPlans = sqliteTable("action_plans", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id),
  name: text("name").notNull(),
  description: text("description"),
  status: text("status", {
    enum: ["not_started", "in_progress", "completed", "on_hold"],
  }).default("not_started"),
  startDate: integer("start_date", { mode: "timestamp" }),
  dueDate: integer("due_date", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Tasks table
export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(),
  actionPlanId: text("action_plan_id")
    .notNull()
    .references(() => actionPlans.id),
  assignedTo: text("assigned_to").references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", {
    enum: ["todo", "in_progress", "review", "done"],
  }).default("todo"),
  priority: text("priority", {
    enum: ["low", "medium", "high"],
  }).default("medium"),
  dueDate: integer("due_date", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});
