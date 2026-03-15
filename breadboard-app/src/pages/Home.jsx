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

const services = [
    { icon: 'account_balance', title: 'CSR & Corporate Advisory', desc: 'Structured, compliant CSR portfolios aligned with measurable outcomes.', img: '/images/services-csr.png' },
    { icon: 'trending_up', title: 'Development & Impact Consulting', desc: 'Scalable program design and performance systems.', img: '/images/services-dev.png' },
    { icon: 'science', title: 'Research & Advocacy Advisory', desc: 'Evidence-led insight and institutional positioning.', img: '/images/services-research.png' },
    { icon: 'campaign', title: 'Marketing & Digital Enablement', desc: 'Strategic communication and structured digital presence.', img: '/images/impact.png' },
];

export default function Home() {
    const [heroRef, heroInView] = useInView(0.1);
    const [introRef, introInView] = useInView();
    const [gapRef, gapInView] = useInView();
    const [modelRef, modelInView] = useInView();
    const [servRef, servInView] = useInView();
    const [alignRef, alignInView] = useInView(0.08);

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

                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="max-w-4xl">
                        <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        </div>

                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            Strategic Advisory for CSR, Development and Institutional Impact
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
          INTRO — Who Breadboard is
          ═══════════════════════════════════════ */}
            <section ref={introRef} className="py-28 md:py-36 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`max-w-5xl mx-auto ${introInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <p className="text-lg md:text-xl text-black/50 leading-[1.9] mb-6">
                            Breadboard is a professional advisory and consulting firm working at the intersection of corporate responsibility, development programming, and institutional strengthening. We partner with corporates, development organizations, and public sector stakeholders to design high-impact programs, improve delivery systems, and support evidence-based decision-making.
                        </p>
                        <p className="text-lg md:text-xl text-black/50 leading-[1.9]">
                            Our work is focused on building scalable, implementation-ready solutions that balance strategic intent with on-ground realities. Breadboard brings together program design expertise, operational understanding, and analytical rigor to support organizations across the full project lifecycle.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHAT WE DO — Image cards
          ═══════════════════════════════════════ */}
            <section ref={servRef} id="services" className="py-28 md:py-36 bg-cream">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-20 ${servInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
                            What We Do
                        </h2>
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
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHY BREADBOARD — with image
          ═══════════════════════════════════════ */}
            <section ref={gapRef} className="py-0 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                    {/* Image side */}
                    <div className={`relative overflow-hidden img-zoom ${gapInView ? 'animate-slide-left' : 'opacity-0'}`}>
                        <img
                            src="/images/strategy.png"
                            alt="Strategy building"
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                    </div>

                    {/* Content side */}
                    <div className={`flex items-center px-8 md:px-16 lg:px-20 py-20 ${gapInView ? 'animate-slide-right' : 'opacity-0'}`}>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-8">
                                Why Breadboard
                            </h2>
                            <p className="text-lg text-black/40 leading-relaxed mb-10">
                                The core gap where impact weakens lies in how institutions operate: strategy is designed in isolation, systems remain underbuilt, and execution is left to adjust in the field. The result is fragmentation and diluted outcomes. Our model works to close that gap.
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


                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          ALIGNMENT MODEL — Connected to Why Breadboard
          ═══════════════════════════════════════ */}
            {/* Smooth white-to-dark gradient connector */}
            <div className="h-20 bg-gradient-to-b from-white to-[#080a0f]"></div>

            <section ref={alignRef} className="py-16 md:py-24 bg-[#080a0f] relative overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,189,89,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,189,89,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
                </div>
                {/* Radial center glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(255,189,89,0.06) 0%, transparent 65%)' }}>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">



                    {/* ══════════════ DIAGRAM ══════════════ */}
                    <div className="w-full overflow-x-auto pb-8 pt-4 custom-scrollbar">
                        <div className="max-w-4xl mx-auto relative px-[160px] lg:px-[180px] min-w-[850px] md:min-w-[900px] max-sm:[zoom:0.55]">

                        {/* ────────────────────────────────────
                            TIER 1 — STRATEGIC INTENT
                        ──────────────────────────────────── */}
                        <div>
                            {/* Tier badge */}
                            <div className={`flex justify-center mb-4 ${alignInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                                <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#12161f] border border-primary/25 rounded"
                                    style={{ boxShadow: '0 0 20px rgba(255,189,89,0.08)' }}>
                                    <span className="material-symbols-outlined text-primary text-[18px]">flag_circle</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Strategic Intent</span>
                                </div>
                            </div>

                            {/* Vertical line from badge → cards */}
                            <div className={`flex justify-center mb-3 ${alignInView ? 'animate-draw-line delay-150' : 'opacity-0'}`}>
                                <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-primary/20"></div>
                            </div>

                            {/* 3 cards */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { icon: 'policy', label: 'CSR & Policy', sub: 'Mandates', delay: 'delay-200' },
                                    { icon: 'apartment', label: 'Institutional', sub: 'Goals', delay: 'delay-300' },
                                    { icon: 'track_changes', label: 'Impact', sub: 'Objectives', delay: 'delay-400' },
                                ].map((item) => (
                                    <div key={item.label}
                                        className={`group flex flex-col items-center gap-3 p-4 md:p-5 bg-[#0e1118] border border-white/[0.07] hover:border-primary/35 hover:bg-[#131722] rounded-lg transition-all duration-500 cursor-default ${alignInView ? `animate-card-pop ${item.delay}` : 'opacity-0'}`}>
                                        <div className="w-11 h-11 bg-primary/[0.08] group-hover:bg-primary group-hover:text-black flex items-center justify-center rounded-lg text-primary/80 transition-all duration-300 group-hover:scale-110">
                                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[12px] font-bold text-white/75 leading-tight">{item.label}</p>
                                            <p className="text-[11px] text-white/35 leading-tight mt-0.5">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── ANIMATED CONNECTOR 1 → 2 ── */}
                        <div className={`flex justify-center my-2 ${alignInView ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
                            <div className="flex flex-col items-center gap-0">
                                <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-primary/60"></div>
                                <svg className="animate-arrow-pulse" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                    <path d="M10 12L0 0H20L10 12Z" fill="rgba(255,189,89,0.7)" />
                                </svg>
                            </div>
                        </div>

                        {/* ────────────────────────────────────
                            TIER 2 — STRUCTURED SYSTEMS (CORE)
                        ──────────────────────────────────── */}
                        <div className={`relative ${alignInView ? 'animate-fade-up delay-550' : 'opacity-0'}`}>

                            {/* ← LEFT: Advisory + Execution */}
                            <div className={`flex absolute -left-[140px] top-1/2 -translate-y-1/2 items-center w-[140px] ${alignInView ? 'animate-slide-from-left delay-700' : 'opacity-0'}`}>
                                <div className="flex flex-col items-center p-3 bg-[#0e1118] border border-white/[0.07] rounded-lg w-28 text-center relative z-10"
                                    style={{ boxShadow: '0 0 15px rgba(0,0,0,0.5)' }}>
                                    <p className="text-[10px] font-bold text-white/70 leading-snug">Advisory</p>
                                    <p className="text-[18px] leading-none text-primary/30 my-0.5">+</p>
                                    <p className="text-[10px] font-bold text-white/70 leading-snug">Execution</p>
                                </div>
                                <div className="flex items-center flex-1 h-full -ml-0.5 z-0">
                                    <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/30 to-primary/80 rounded-l"></div>
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="-ml-px">
                                        <path d="M10 6L0 0V12L10 6Z" fill="rgba(255,189,89,0.8)" />
                                    </svg>
                                </div>
                            </div>

                            {/* → RIGHT: Strategy + Implementation */}
                            <div className={`flex absolute -right-[140px] top-1/2 -translate-y-1/2 items-center w-[140px] justify-end ${alignInView ? 'animate-slide-from-right delay-700' : 'opacity-0'}`}>
                                <div className="flex items-center flex-1 h-full -mr-0.5 z-0">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="-mr-px">
                                        <path d="M0 6L10 0V12L0 6Z" fill="rgba(255,189,89,0.8)" />
                                    </svg>
                                    <div className="flex-1 h-[2px] bg-gradient-to-l from-primary/30 to-primary/80 rounded-r"></div>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-[#0e1118] border border-white/[0.07] rounded-lg w-28 text-center relative z-10"
                                    style={{ boxShadow: '0 0 15px rgba(0,0,0,0.5)' }}>
                                    <p className="text-[10px] font-bold text-white/70 leading-snug">Strategy</p>
                                    <p className="text-[18px] leading-none text-primary/30 my-0.5">+</p>
                                    <p className="text-[10px] font-bold text-white/70 leading-snug">Implementation</p>
                                </div>
                            </div>

                            {/* ── MAIN TIER 2 BOX ── */}
                            <div className={`relative bg-[#0b1119] border-2 border-primary/35 rounded-xl overflow-hidden ${alignInView ? 'animate-glow-pulse' : ''}`}
                                style={{ boxShadow: '0 0 60px rgba(255,189,89,0.08), inset 0 1px 0 rgba(255,189,89,0.1)' }}>
                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
                                {/* Top-left/right corner marks */}
                                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/50 rounded-tl"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/50 rounded-tr"></div>
                                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/30 rounded-bl"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/30 rounded-br"></div>

                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="text-center mb-2">
                                        <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-primary/10 border border-primary/20 rounded">
                                            <span className="material-symbols-outlined text-primary text-[18px]">settings_suggest</span>
                                            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Structured Systems</span>
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] font-bold text-primary/30 uppercase tracking-[0.25em] mb-6">
                                        Breadboard's Core Integration
                                    </p>
                                    <div className="border-t border-dashed border-white/[0.08] mb-6"></div>

                                    {/* 4-column cards */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { icon: 'hub', label: 'Program', sub: 'Architecture', delay: 'delay-650' },
                                            { icon: 'gavel', label: 'Governance', sub: 'Frameworks', delay: 'delay-750' },
                                            { icon: 'monitoring', label: 'Performance', sub: 'Systems', delay: 'delay-850' },
                                            { icon: 'insights', label: 'Data &', sub: 'Insights', delay: 'delay-950' },
                                        ].map((item) => (
                                            <div key={item.label}
                                                className={`group flex flex-col items-center gap-3 p-3.5 md:p-4 bg-[#06080e] border border-primary/[0.12] hover:border-primary/40 hover:bg-primary/[0.04] rounded-lg transition-all duration-500 cursor-default ${alignInView ? `animate-card-pop ${item.delay}` : 'opacity-0'}`}>
                                                <div className="w-11 h-11 bg-primary/[0.08] group-hover:bg-primary group-hover:text-black flex items-center justify-center rounded-lg text-primary/80 transition-all duration-300 group-hover:scale-110">
                                                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-[12px] font-bold text-white/75 leading-tight">{item.label}</p>
                                                    <p className="text-[11px] text-white/35 leading-tight mt-0.5">{item.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── ANIMATED CONNECTOR 2 → 3 ── */}
                        <div className={`flex justify-center my-2 ${alignInView ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
                            <div className="flex flex-col items-center">
                                <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-primary/30"></div>
                                <svg className="animate-arrow-pulse" style={{ animationDelay: '0.8s' }} width="20" height="12" viewBox="0 0 20 12" fill="none">
                                    <path d="M10 12L0 0H20L10 12Z" fill="rgba(255,189,89,0.7)" />
                                </svg>
                            </div>
                        </div>

                        {/* ────────────────────────────────────
                            TIER 3 — GROUND EXECUTION
                        ──────────────────────────────────── */}
                        <div>
                            {/* Vertical line → badge */}
                            <div className={`flex justify-center mb-4 ${alignInView ? 'animate-draw-line delay-1000' : 'opacity-0'}`}>
                                <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-primary/20"></div>
                            </div>

                            {/* Tier badge */}
                            <div className={`flex justify-center mb-4 ${alignInView ? 'animate-fade-up delay-[1.05s]' : 'opacity-0'}`}>
                                <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#12161f] border border-primary/25 rounded"
                                    style={{ boxShadow: '0 0 20px rgba(255,189,89,0.08)' }}>
                                    <span className="material-symbols-outlined text-primary text-[18px]">rocket_launch</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Ground Execution</span>
                                </div>
                            </div>

                            {/* Vertical line → 3 cards */}
                            <div className={`flex justify-center mb-3 ${alignInView ? 'animate-draw-line delay-1100' : 'opacity-0'}`}>
                                <div className="w-px h-6 bg-gradient-to-b from-primary/30 to-primary/10"></div>
                            </div>

                            {/* 3 cards */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { icon: 'landscape', label: 'Field', sub: 'Realities', delay: 'delay-[1.1s]' },
                                    { icon: 'share', label: 'Delivery', sub: 'Ecosystems', delay: 'delay-[1.2s]' },
                                    { icon: 'groups', label: 'Stakeholder', sub: 'Engagement', delay: 'delay-[1.3s]' },
                                ].map((item) => (
                                    <div key={item.label}
                                        className={`group flex flex-col items-center gap-3 p-4 md:p-5 bg-[#0e1118] border border-white/[0.07] hover:border-primary/35 hover:bg-[#131722] rounded-lg transition-all duration-500 cursor-default ${alignInView ? `animate-card-pop ${item.delay}` : 'opacity-0'}`}>
                                        <div className="w-11 h-11 bg-primary/[0.08] group-hover:bg-primary group-hover:text-black flex items-center justify-center rounded-lg text-primary/80 transition-all duration-300 group-hover:scale-110">
                                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[12px] font-bold text-white/75 leading-tight">{item.label}</p>
                                            <p className="text-[11px] text-white/35 leading-tight mt-0.5">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── DASHED SEPARATOR ── */}
                        <div className={`mt-12 border-t border-dashed border-white/[0.08] ${alignInView ? 'animate-fade-in delay-[1.4s]' : 'opacity-0'}`}></div>

                        {/* ── OUTCOME BAND ── */}
                        <div className={`mt-10 flex flex-col items-center gap-6 ${alignInView ? 'animate-fade-up delay-[1.4s]' : 'opacity-0'}`}>
                            {/* Heading */}
                            <div className="flex justify-center">
                                <div className="flex items-center gap-2.5 px-6 py-2.5 bg-[#12161f] border border-primary/25 rounded"
                                    style={{ boxShadow: '0 0 20px rgba(255,189,89,0.08)' }}>
                                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Outcome</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 w-full">
                                {[
                                    { icon: 'verified', label: 'Aligned Strategy', delay: 'delay-[1.45s]' },
                                    { icon: 'precision_manufacturing', label: 'Robust Systems', delay: 'delay-[1.5s]' },
                                    { icon: 'assessment', label: 'Measurable Impact', delay: 'delay-[1.55s]' },
                                    { icon: 'eco', label: 'Sustainable Growth', delay: 'delay-[1.6s]' },
                                ].map((item, i) => (
                                    <div key={item.label}
                                        className={`group flex items-center gap-2 px-3.5 py-2 bg-[#0e1118] border border-white/[0.07] hover:border-primary/30 hover:bg-primary/[0.04] rounded transition-all duration-300 cursor-default ${alignInView ? `animate-card-pop ${item.delay}` : 'opacity-0'}`}>
                                        <span className="material-symbols-outlined text-primary text-[16px] group-hover:scale-110 transition-transform">{item.icon}</span>
                                        <span className="text-[11px] font-semibold text-white/55 group-hover:text-white/80 whitespace-nowrap transition-colors">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
