"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
              Let's build<br />
              something<br />
              <span className="text-accent">great together.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-12 max-w-sm">
              Tell us about your project and goals. We'll get back to you within
              one business day.
            </p>

            <div className="flex flex-col gap-5 text-sm text-zinc-400">
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@riomedia.com" className="hover:text-foreground transition-colors">
                  hello@riomedia.com
                </a>
              </div>
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">Location</p>
                <p>Miami, FL — serving clients worldwide</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">We got your message.</h3>
                <p className="text-zinc-400">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-[#111] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="bg-[#111] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest">
                    Service
                  </label>
                  <select
                    className="bg-[#111] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-zinc-500 transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      What are you looking for?
                    </option>
                    <option value="paid-media">Paid Media</option>
                    <option value="seo">SEO & Content</option>
                    <option value="social">Social Media</option>
                    <option value="analytics">Analytics & CRO</option>
                    <option value="full">Full-service partnership</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="bg-[#111] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 rounded-full bg-accent text-white font-medium hover:bg-accent-muted transition-colors"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
