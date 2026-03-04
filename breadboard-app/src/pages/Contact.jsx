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
    const [heroRef, heroInView] = useInView(0.1);
    const [formRef, formInView] = useInView();
    const [careerRef, careerInView] = useInView();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
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
                    <div className={`mt-8 ${heroInView ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                        <a href="#contact-form" className="inline-flex items-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5 group">
                            Schedule a Consultation
                            <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
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
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Get in Touch</span>
                            <div className="section-divider mb-8"></div>
                            <p className="text-black/40 leading-relaxed mb-10 text-[15px]">
                                Whether you're a corporate looking to strengthen your CSR portfolio or an institution seeking strategic advisory — we'd love to hear from you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <span className="material-symbols-outlined text-xl">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-black mb-1">Email</h3>
                                        <a href="mailto:connect@breadboard.in" className="text-sm text-black/40 hover:text-primary transition-colors">
                                            connect@breadboard.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <span className="material-symbols-outlined text-xl">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-black mb-1">Office</h3>
                                        <p className="text-sm text-black/40">New Delhi, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="mt-10 pt-8 border-t border-black/5">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {['LinkedIn', 'X', 'YouTube', 'Instagram', 'Facebook'].map((name) => (
                                        <a key={name} href="#" className="w-10 h-10 bg-black/5 flex items-center justify-center text-black/30 hover:bg-primary hover:text-black transition-all duration-300" aria-label={name}>
                                            <span className="text-xs font-bold">{name[0]}</span>
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
                                                <input type="text" id="name" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Your full name" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Email Address <span className="text-primary">*</span>
                                                </label>
                                                <input type="email" id="email" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="you@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="org" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Organisation Name <span className="text-primary">*</span>
                                                </label>
                                                <input type="text" id="org" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Company / Institution" />
                                            </div>
                                            <div>
                                                <label htmlFor="designation" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Designation
                                                </label>
                                                <input type="text" id="designation" className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Your role" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="inst" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Type of Institution <span className="text-primary">*</span>
                                                </label>
                                                <select id="inst" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black focus:border-primary focus:ring-0 transition-colors">
                                                    <option value="">Select type</option>
                                                    {institutionTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="engage" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                    Nature of Engagement <span className="text-primary">*</span>
                                                </label>
                                                <select id="engage" required className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black focus:border-primary focus:ring-0 transition-colors">
                                                    <option value="">Select engagement</option>
                                                    {engagementTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="msg" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2">
                                                Your Message <span className="text-primary">*</span>
                                            </label>
                                            <textarea id="msg" required rows={4} className="w-full border-0 border-b-2 border-black/10 bg-transparent py-3 text-sm text-black placeholder-black/20 focus:border-primary focus:ring-0 transition-colors resize-none" placeholder="Please outline your objectives, scope, and expected timelines."></textarea>
                                        </div>

                                        <button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl group flex items-center justify-center gap-2">
                                            Submit
                                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CAREERS
          ═══════════════════════════════════════ */}
            <section ref={careerRef} id="careers" className="py-28 md:py-36 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center mb-16 ${careerInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Careers</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Work With Us
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
                            At Breadboard, we engage with complex institutional challenges that demand clarity, accountability, and thoughtful execution. We value structural thinking, execution discipline, analytical rigor, and institutional integrity.
                        </p>
                    </div>

                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 ${careerInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        {[
                            { icon: 'psychology', label: 'Structural Thinking' },
                            { icon: 'precision_manufacturing', label: 'Execution Discipline' },
                            { icon: 'analytics', label: 'Analytical Rigor' },
                            { icon: 'verified', label: 'Institutional Integrity' },
                        ].map((v) => (
                            <div key={v.label} className="group glass-card p-6 text-center hover:bg-white/[0.06] transition-all duration-300">
                                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <span className="material-symbols-outlined text-xl">{v.icon}</span>
                                </div>
                                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{v.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 ${careerInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Interested in joining our team?</h3>
                            <p className="text-white/30 text-sm">
                                If these values resonate with you, we invite you to apply for the open roles that align with your expertise.
                            </p>
                        </div>
                        <a href="#" className="flex-shrink-0 inline-flex items-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group">
                            View Open Roles
                            <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
