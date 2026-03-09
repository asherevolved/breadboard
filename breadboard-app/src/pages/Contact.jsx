import { useState, useEffect, useRef } from 'react';

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

const institutionTypes = [
    'Corporate / CSR Foundation',
    'Not-for-Profit / Development Organisation',
    'Government / Public Institution',
    'Private Sector Enterprise',
    'Mission-Driven / Impact Venture',
    'Multilateral / Philanthropic Institution',
    'Other',
];

const engagementTypes = [
    'CSR & Corporate Advisory',
    'Program Design & Scale-up',
    'Monitoring, Evaluation & Impact Systems',
    'Research & Policy Advisory',
    'Marketing & Digital Strategy',
    'Institutional Capacity Strengthening',
    'Partnership / Collaboration',
    'Exploratory Discussion',
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [heroRef, heroInView] = useInView(0.1);
    const [formRef, formInView] = useInView();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.target;
            const formData = new FormData(form);

            // PASTE YOUR GOOGLE WEB APP URL BELOW
            const scriptURL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

            // We use simple form submission to avoid CORS issues with Google Apps Script
            const res = await fetch(scriptURL, {
                method: "POST",
                body: formData,
                mode: "no-cors" // Google Apps Script requires no-cors for direct browser POSTs
            });

            // With no-cors, we can't read the response, so we assume success if no error is thrown
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/hero.png" alt="Contact" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                    <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <div className="section-divider mx-auto mb-8"></div>
                    </div>
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        Let's Build <span className="text-gradient">Impact</span> That Lasts
                    </h1>
                    <p className={`text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed ${heroInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        Connect with us to design structured, scalable, and measurable impact systems.
                    </p>

                </div>
            </section>

            {/* ═══════════════════════════════════════
          CONTACT FORM
          ═══════════════════════════════════════ */}
            <section ref={formRef} id="contact-form" className="py-28 md:py-36 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid lg:grid-cols-5 gap-16 lg:gap-20 ${formInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        {/* Left */}
                        <div className="lg:col-span-2">
                            <div className="section-divider mb-8"></div>

                            {/* Contact Information */}
                            <div className="mb-10 text-black/60 space-y-6">
                                <div>
                                    <h3 className="font-bold text-black text-sm uppercase tracking-widest mb-2">Get in Touch</h3>
                                    <a href="mailto:info@breadboard.in" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors text-lg">
                                        <span className="material-symbols-outlined mr-2">mail</span>
                                        info@breadboard.in
                                    </a>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="mt-10 pt-8 border-t border-black/5">
                                <div className="flex gap-3">
                                    {[
                                        { name: 'LinkedIn', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> },
                                        { name: 'X', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> },
                                        { name: 'YouTube', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> },
                                        { name: 'Instagram', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> },
                                        { name: 'Facebook', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg> },
                                    ].map(({ name, icon }) => (
                                        <a
                                            key={name}
                                            href={name === 'Instagram' ? 'https://www.instagram.com/breadboard.in?igsh=cG9remlrMXpvMzQ3' : name === 'X' ? 'https://x.com/breadboardindia?s=21' : name === 'YouTube' ? 'https://www.youtube.com/@BreadboardConsulting' : name === 'LinkedIn' ? 'https://www.linkedin.com/company/breadboard-india/' : name === 'Facebook' ? 'https://www.facebook.com/profile.php?id=61584892956215' : '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-black/5 flex items-center justify-center text-black/30 hover:bg-primary hover:text-black transition-all duration-300"
                                            aria-label={name}
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <div className="bg-cream border border-primary/20 p-16 text-center">
                                    <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-8 rounded-full">
                                        <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-black mb-4">Thank You!</h3>
                                    <p className="text-black/40 text-lg">You will hear from us soon..</p>
                                </div>
                            ) : (
                                <div className="bg-cream/50 border border-black/5 p-8 md:p-10">
                                    <div className="w-full h-[3px] bg-primary mb-8 -mt-10 -mx-0 relative -left-0"></div>
                                    <form onSubmit={handleSubmit} className="space-y-7">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Name <span className="text-primary">*</span>
                                                </label>
                                                <input type="text" id="name" name="name" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Your full name" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Email Address <span className="text-primary">*</span>
                                                </label>
                                                <input type="email" id="email" name="email" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="you@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="org" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Organisation Name <span className="text-primary">*</span>
                                                </label>
                                                <input type="text" id="org" name="organization" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Company / Institution" />
                                            </div>
                                            <div>
                                                <label htmlFor="designation" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Designation
                                                </label>
                                                <input type="text" id="designation" name="designation" className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Your role" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="inst" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Type of Institution <span className="text-primary">*</span>
                                                </label>
                                                <select id="inst" name="institution_type" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black focus:border-primary focus:ring-0 transition-colors">
                                                    <option value="">Select type</option>
                                                    {institutionTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="engage" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Nature of Engagement <span className="text-primary">*</span>
                                                </label>
                                                <select id="engage" name="engagement_nature" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black focus:border-primary focus:ring-0 transition-colors">
                                                    <option value="">Select engagement</option>
                                                    {engagementTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="msg" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                Your Message <span className="text-primary">*</span>
                                            </label>
                                            <textarea id="msg" name="message" required rows={4} className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors resize-none" placeholder="Please outline your objectives, scope, and expected timelines."></textarea>
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                            {!isSubmitting && <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
