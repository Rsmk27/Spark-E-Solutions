"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ArrowLeft, Send } from "lucide-react";

const SESSION_TYPES = [
  "IoT Basics (DHT, LDR, IR Sensors)",
  "Embedded Systems Design",
  "Full Stack App Development",
];

interface BookingForm {
  clientName: string;
  organization: string;
  sessionType: string;
  numberOfDays: number;
  startDate: string;
  notes: string;
}

const initialForm: BookingForm = {
  clientName: "",
  organization: "",
  sessionType: SESSION_TYPES[0],
  numberOfDays: 1,
  startDate: "",
  notes: "",
};

export default function BookPage() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "numberOfDays" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real Firestore write via lib/firebase.ts
    // e.g. await addDoc(collection(db, "bookings"), { ...form, createdAt: serverTimestamp() });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Booking Submitted!</h2>
          <p className="text-slate-400 mb-8">
            Thank you, <span className="text-white font-medium">{form.clientName}</span>! Your
            session request has been received. Our team will get back to you shortly to
            confirm the details.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false); }}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 rounded-xl transition-colors"
            >
              Book Another Session
            </button>
            <Link
              href="/"
              className="w-full border border-slate-600 hover:border-slate-400 text-slate-300 font-medium py-3 rounded-xl transition-colors text-center"
            >
              Back to Home
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
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-lg text-white">Spark E-Solutions</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Book a <span className="text-cyan-400">Session</span>
          </h1>
          <p className="text-slate-400">
            Fill in the details below and our team will confirm your session within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 space-y-6"
        >
          {/* Client Name */}
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-slate-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              id="clientName"
              name="clientName"
              type="text"
              required
              value={form.clientName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors outline-none"
            />
          </div>

          {/* Organisation */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
              Organisation / Institution
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={form.organization}
              onChange={handleChange}
              placeholder="e.g. NIT Warangal"
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors outline-none"
            />
          </div>

          {/* Session Type Dropdown */}
          <div>
            <label htmlFor="sessionType" className="block text-sm font-medium text-slate-300 mb-2">
              Type of Session <span className="text-red-400">*</span>
            </label>
            <select
              id="sessionType"
              name="sessionType"
              required
              value={form.sessionType}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white transition-colors outline-none"
            >
              {SESSION_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Days */}
          <div>
            <label htmlFor="numberOfDays" className="block text-sm font-medium text-slate-300 mb-2">
              Number of Days Required <span className="text-red-400">*</span>
            </label>
            <input
              id="numberOfDays"
              name="numberOfDays"
              type="number"
              min={1}
              max={30}
              required
              value={form.numberOfDays}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white transition-colors outline-none"
            />
          </div>

          {/* Preferred Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-slate-300 mb-2">
              Preferred Start Date <span className="text-red-400">*</span>
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              value={form.startDate}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white transition-colors outline-none [color-scheme:dark]"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-slate-300 mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              placeholder="Any specific requirements, topics, or questions..."
              className="w-full bg-slate-900 border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 disabled:cursor-not-allowed text-slate-900 font-bold py-4 rounded-xl transition-colors text-lg"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Booking Request
              </>
            )}
          </button>

          <p className="text-slate-500 text-xs text-center">
            Your booking will be saved to our Firestore database and confirmed within 24 hours.
          </p>
        </form>
      </main>
    </div>
  );
}
