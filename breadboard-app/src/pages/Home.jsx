import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

/* ─── Intersection Observer hook ─── */
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

/* ─── Animated Counter ─── */
function Counter({ end, suffix = '', label }) {
    const [ref, inView] = useInView(0.3);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, end]);
    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">{count}{suffix}</div>
            <div className="text-sm uppercase tracking-[0.2em] text-black/40 font-semibold">{label}</div>
        </div>
    );
}

const services = [
    { icon: 'account_balance', title: 'CSR & Corporate Advisory', desc: 'Structured, compliant CSR portfolios aligned with measurable outcomes.', img: '/images/services-csr.png' },
    { icon: 'trending_up', title: 'Development & Impact Consulting', desc: 'Scalable program design and performance systems.', img: '/images/services-dev.png' },
    { icon: 'science', title: 'Research & Advocacy Advisory', desc: 'Evidence-led insight and institutional positioning.', img: '/images/services-research.png' },
    { icon: 'campaign', title: 'Marketing & Digital Enablement', desc: 'Strategic communication and structured digital presence.', img: '/images/impact.png' },
];

const partners = [
    { icon: 'domain', title: 'Corporates & CSR Foundations', desc: 'We work with corporate CSR teams, industry institutions, and corporate foundations to design compliant, strategy-aligned portfolios and build structured delivery and performance systems.' },
    { icon: 'volunteer_activism', title: 'Not-for-Profit & Development Organizations', desc: 'We support non-profit institutions, development agencies, and philanthropic organizations in strengthening program design, operational systems, and impact communication.' },
    { icon: 'account_balance', title: 'Public Systems & Government Institutions', desc: 'We engage with public institutions and government stakeholders to support structured planning, institutional strengthening, and evidence-based decision systems.' },
    { icon: 'lightbulb', title: 'Mission-Driven Institutions', desc: 'We work with social enterprises, educational institutions, and healthcare systems to strengthen governance, operational delivery, and strategic visibility.' },
];

export default function Home() {
    const [heroRef, heroInView] = useInView(0.1);
    const [gapRef, gapInView] = useInView();
    const [modelRef, modelInView] = useInView();
    const [servRef, servInView] = useInView();
    const [partnersRef, partnersInView] = useInView();

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO — Full-screen with background image
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/hero.png"
                        alt="Strategic advisory meeting"
                        className="w-full h-full object-cover"
                    />
                    <div className="hero-overlay absolute inset-0"></div>
                </div>

                {/* Animated gold lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="max-w-3xl">
                        <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 bg-primary/5 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Advisory & Consulting</span>
                            </div>
                        </div>

                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            Strategic Advisory for{' '}
                            <span className="text-gradient">CSR, Development</span>{' '}
                            and Institutional Impact
                        </h1>

                        <p className={`text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-12 ${heroInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                            Designing structured systems that translate intent into measurable action.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 ${heroInView ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
                            >
                                Schedule a Consultation
                                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Scroll</span>
                    <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          THE CORE GAP
          ═══════════════════════════════════════ */}
            <section ref={gapRef} className="py-28 md:py-36 bg-white relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 ${gapInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">The Challenge</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
                            Where Impact Weakens
                        </h2>
                    </div>
                    <div className={`max-w-3xl mx-auto ${gapInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        <div className="relative pl-8 border-l-2 border-primary/30">
                            <p className="text-xl md:text-2xl text-black/40 leading-relaxed font-light">
                                Across institutions, strategy is often developed independently of systems, and systems are disconnected from execution. The result is{' '}
                                <span className="font-semibold text-black">fragmentation</span>{' '}
                                and{' '}
                                <span className="font-semibold text-black">diluted outcomes</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHY BREADBOARD — with image
          ═══════════════════════════════════════ */}
            <section ref={modelRef} className="py-0 bg-cream">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                    {/* Image side */}
                    <div className={`relative overflow-hidden img-zoom ${modelInView ? 'animate-slide-left' : 'opacity-0'}`}>
                        <img
                            src="/images/strategy.png"
                            alt="Strategy building"
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/20"></div>
                    </div>

                    {/* Content side */}
                    <div className={`flex items-center px-8 md:px-16 lg:px-20 py-20 ${modelInView ? 'animate-slide-right' : 'opacity-0'}`}>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Our Model</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-8">
                                Why Breadboard
                            </h2>
                            <p className="text-lg text-black/40 leading-relaxed mb-10">
                                Across CSR portfolios, development programs, and institutional systems, we've seen the same gap repeat: strategy is designed in isolation, systems are underbuilt, and execution is left to adjust in the field. Our model works to close that gap.
                            </p>

                            {/* Flow diagram */}
                            <div className="flex items-center gap-3 md:gap-4 mb-10">
                                {[
                                    { label: 'Strategy', icon: 'architecture' },
                                    { label: 'Systems', icon: 'settings_suggest' },
                                    { label: 'Execution', icon: 'rocket_launch' },
                                ].map((item, i) => (
                                    <div key={item.label} className="flex items-center gap-3 md:gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-black/50">{item.label}</span>
                                        </div>
                                        {i < 2 && (
                                            <span className="material-symbols-outlined text-primary/30 text-xl mb-5">arrow_forward</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/services"
                                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark uppercase tracking-wider group transition-colors"
                            >
                                Explore Our Services
                                <span className="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHAT WE DO — Image cards like Sattva
          ═══════════════════════════════════════ */}
            <section ref={servRef} id="services" className="py-28 md:py-36 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-20 ${servInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">What We Do</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-black/40 max-w-2xl mx-auto">
                            We work across the impact ecosystem — from strategy to systems to execution.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${servInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        {services.map((s, i) => (
                            <Link
                                to="/services"
                                key={s.title}
                                className="group relative overflow-hidden bg-black min-h-[320px] flex items-end img-zoom"
                            >
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="relative p-8 md:p-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{s.title}</h3>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-md">{s.desc}</p>
                                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={`text-center mt-12 ${servInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        <Link
                            to="/services"
                            className="inline-flex items-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHO WE WORK WITH
          ═══════════════════════════════════════ */}
            <section ref={partnersRef} className="py-28 md:py-36 bg-dark-surface relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center mb-20 ${partnersInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Our Partners</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Who We Work With
                        </h2>
                        <p className="text-lg text-white/30 max-w-3xl mx-auto leading-relaxed">
                            We partner with institutions across sectors that are committed to structured, measurable, and sustainable impact.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${partnersInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        {partners.map((p) => (
                            <div
                                key={p.title}
                                className="group relative glass-card p-8 md:p-10 hover:bg-white/[0.06] transition-all duration-500 hover:border-primary/20 gold-glow hover:shadow-primary/5"
                            >
                                {/* Number accent */}
                                <div className="absolute top-6 right-8 text-6xl font-extrabold text-white/[0.03] select-none">
                                    {String(partners.indexOf(p) + 1).padStart(2, '0')}
                                </div>

                                <div className="flex items-start gap-5 mb-5">
                                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-3">{p.title}</h3>
                                        <p className="text-sm text-white/30 leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CTA — Full width with image
          ═══════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/impact.png" alt="Impact" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <div className="section-divider mx-auto mb-8"></div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to build impact that lasts?
                    </h2>
                    <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Connect with us to design structured, scalable, and measurable impact systems.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-12 py-5 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-0.5 group"
                    >
                        Start the Conversation
                        <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
