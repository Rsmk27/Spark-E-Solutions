# Spark E-Solutions Platform

Platform for Spark E-Solutions to showcase IoT/Embedded training services and manage session bookings.

## Project Analysis

### 1) Purpose
- A marketing + lead-capture web platform for IoT and Embedded Systems training services.
- Provides a public landing page and dedicated workflows for booking and admin management.

### 2) Current Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS
- **UI/Animation:** lucide-react, framer-motion
- **Backend Integrations (prepared):** Firebase Auth + Firestore (and planned Storage usage)

### 3) Implemented Product Areas
- **Landing experience (`/`)**
  - Modular section-based layout (Hero, Stats, WhyUs, Services, Process, Gallery, Team).
  - SEO metadata, sitemap, and robots configuration are present.
- **Booking flow (`/book`)**
  - User form for session requests with client details, session type, duration, and start date.
  - Submission is currently mocked; Firestore write is indicated as TODO.
- **Admin dashboard (`/admin`)**
  - UI for team/bookings/clients/gallery tabs.
  - Uses mock data with placeholder actions.
  - Authentication and storage actions are scaffolded but not connected.

### 4) Architecture Observations
- Clear component separation for homepage sections improves maintainability.
- Firebase setup is centralized in `lib/firebase.ts` with environment-variable placeholders.
- The app is currently **frontend-complete for core screens**, but **backend persistence and auth flows are partially implemented**.

### 5) Functional Maturity
- **Strong:** UI structure, branding consistency, route organization, metadata/SEO basics.
- **In Progress:** Firestore booking persistence, Firebase Google Auth in admin, gallery upload integration.
- **Needed for production readiness:** data validation/server-side handling, role-based access control, admin action wiring, and deployment-grade environment hardening.

### 6) Build & Tooling Notes
- Project scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- In this environment, build can fail when Google Fonts are unreachable (`fonts.googleapis.com`), which affects `next/font` loading in `app/layout.tsx`.
- Lint currently prompts for ESLint configuration and requires setup completion before non-interactive lint execution.

### 7) Recommended Next Priorities
1. Complete Firestore integration for booking submissions and admin booking updates.
2. Enable real Firebase authentication for admin access and secure routes.
3. Implement Firebase Storage upload + gallery data flow.
4. Add robust form validation and error handling for booking/admin operations.
5. Finalize ESLint configuration and add CI checks for lint/build stability.