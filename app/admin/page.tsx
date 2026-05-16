"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  Calendar,
  Upload,
  LogOut,
  Zap,
  CheckCircle,
  Clock,
} from "lucide-react";

const teamMembers = [
  { name: "Chaitanya", role: "Founder, App Developer & Embedded Engineer" },
  { name: "Ramu", role: "Co-founder & Web Developer" },
  { name: "Anand", role: "Embedded Engineer" },
  { name: "Prem", role: "App Developer" },
  { name: "Manikanta", role: "Web Developer" },
  { name: "DivyaKanth", role: "Funder" },
  { name: "Navya", role: "Funder" },
];

const mockBookings = [
  {
    id: "1",
    name: "Rahul Sharma",
    org: "NIT Warangal",
    session: "IoT Basics",
    days: 3,
    date: "2024-08-15",
    status: "pending",
  },
  {
    id: "2",
    name: "Priya Reddy",
    org: "JNTU Hyderabad",
    session: "Embedded Systems Design",
    days: 5,
    date: "2024-08-20",
    status: "confirmed",
  },
  {
    id: "3",
    name: "Arun Kumar",
    org: "Tech Solutions Pvt. Ltd.",
    session: "Full Stack App Development",
    days: 7,
    date: "2024-09-01",
    status: "pending",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"team" | "bookings" | "gallery">(
    "team"
  );
  const [isAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 max-w-md w-full text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <p className="text-slate-400 mb-8">
            This area is restricted to authorised Spark E-Solutions team members.
            Please sign in with your Google account to continue.
          </p>
          {/* Google Sign-In button — Firebase Auth integration placeholder */}
          <button
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 px-6 rounded-xl transition-colors"
            onClick={() => alert("Firebase Google Auth — connect in lib/firebase.ts")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
          <div className="mt-6">
            <Link
              href="/"
              className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-lg text-white">Spark E-Solutions</span>
            <span className="ml-2 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">admin@sparke.solutions</span>
            <button className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors text-sm">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-slate-800">
          {(["team", "bookings", "gallery"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {tab === "team" && <Users className="w-4 h-4" />}
              {tab === "bookings" && <Calendar className="w-4 h-4" />}
              {tab === "gallery" && <Upload className="w-4 h-4" />}
              {tab === "team" ? "Team Management" : tab === "bookings" ? "Booking Management" : "Gallery Upload"}
            </button>
          ))}
        </div>

        {/* Team Management */}
        {activeTab === "team" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Team Members</h2>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
                + Add Member
              </button>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/80">
                    <th className="text-left px-6 py-4 text-slate-400 font-medium">Name</th>
                    <th className="text-left px-6 py-4 text-slate-400 font-medium">Role</th>
                    <th className="text-left px-6 py-4 text-slate-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, idx) => (
                    <tr
                      key={member.name}
                      className={`border-b border-slate-700/50 ${idx % 2 === 0 ? "bg-slate-800" : "bg-slate-800/50"}`}
                    >
                      <td className="px-6 py-4 font-medium text-white">{member.name}</td>
                      <td className="px-6 py-4 text-slate-300">{member.role}</td>
                      <td className="px-6 py-4">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs mr-3">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300 transition-colors text-xs">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Booking Management */}
        {activeTab === "bookings" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Incoming Bookings</h2>
              <span className="text-sm text-slate-400">
                {mockBookings.filter((b) => b.status === "pending").length} pending
              </span>
            </div>
            <div className="space-y-4">
              {mockBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold text-white">{booking.name}</p>
                    <p className="text-slate-400 text-sm">{booking.org}</p>
                    <p className="text-slate-300 text-sm mt-1">
                      {booking.session} · {booking.days} day(s) · Starts {booking.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium ${
                        booking.status === "confirmed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {booking.status === "confirmed" ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {booking.status}
                    </span>
                    {booking.status === "pending" && (
                      <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-1.5 rounded-lg transition-colors text-xs">
                        Confirm
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Upload */}
        {activeTab === "gallery" && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Gallery Upload</h2>
            <div className="bg-slate-800 border-2 border-dashed border-slate-600 hover:border-cyan-500/50 rounded-2xl p-12 text-center transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-300 font-medium mb-2">
                Upload photos to Firebase Storage
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Drag & drop or click to select images (PNG, JPG, WebP — max 10 MB each)
              </p>
              <button
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
                onClick={() => alert("Firebase Storage upload — connect in lib/firebase.ts")}
              >
                Select Files
              </button>
            </div>
            <p className="text-slate-500 text-xs text-center mt-4">
              Uploaded images will appear in the gallery on the landing page via Firebase Storage.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
