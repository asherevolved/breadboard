import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

const approachCards = [
    { icon: 'radar', title: 'Need-Based Program Design', desc: 'We begin by grounding our work in contextual assessment and real stakeholder needs. By prioritizing relevance, local realities, and institutional readiness, we design programs that are demand-driven, adaptable, and capable of sustaining impact over time.' },
    { icon: 'hub', title: 'Collaborative Ecosystem Building', desc: 'We believe that long-term impact is created through collaboration, not isolated interventions. Our approach focuses on bringing diverse stakeholders together across sectors and institutions to build shared ownership, collective action, and coordinated efforts.' },
    { icon: 'engineering', title: 'Execution-Focused Planning', desc: 'We translate strategy into clear operational models, implementation frameworks, and performance systems. This ensures that programs are not only well-designed but also delivery-ready, scalable, and resilient in dynamic operating environments.' },
    { icon: 'groups', title: 'Community-Informed & Impact-Oriented', desc: 'We integrate community perspectives, field-level insights, and data-driven evaluation into program design and monitoring processes. This allows programs to remain responsive, accountable, and continuously improved.' },
];

export default function About() {
    const [heroRef, heroInView] = useInView(0.1);
    const [whoRef, whoInView] = useInView();
    const [approachRef, approachInView] = useInView();
    const [ctaRef, ctaInView] = useInView();

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO — Full-screen with image
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/about-hero.png" alt="Team collaboration" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="max-w-3xl">
                        <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                            <div className="section-divider mb-8"></div>
                        </div>
                        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            About <span className="text-gradient">Breadboard</span>
                        </h1>
                        <p className={`max-w-2xl text-lg md:text-xl text-white/40 leading-relaxed ${heroInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                            A professional advisory and consulting firm working at the intersection of corporate responsibility, development programming, and institutional strengthening.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHO WE ARE — Image + text split
          ═══════════════════════════════════════ */}
            <section ref={whoRef} className="py-0 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
                    {/* Image side */}
                    <div className={`relative overflow-hidden img-zoom ${whoInView ? 'animate-slide-left' : 'opacity-0'}`}>
                        <img src="/images/strategy.png" alt="Advisory team at work" className="w-full h-full object-cover min-h-[400px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        {/* Floating gold accent */}
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-sm border-l-4 border-primary">
                            <p className="text-white/90 text-sm italic leading-relaxed">"Building scalable, implementation-ready solutions that balance strategic intent with on-ground realities."</p>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className={`flex items-center px-8 md:px-16 lg:px-20 py-20 ${whoInView ? 'animate-slide-right' : 'opacity-0'}`}>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-8">
                                Advisory at the Intersection of <span className="text-gradient">Responsibility & Impact</span>
                            </h2>
                            <p className="text-black/50 leading-[1.8] mb-6 text-[15px]">
                                Breadboard Consulting Pvt Ltd is a professional advisory and consulting firm working at the intersection of corporate responsibility, development programming, and institutional strengthening. We partner with corporates, development organizations, and public sector stakeholders to design high-impact programs, improve delivery systems, and support evidence-based decision-making.
                            </p>
                            <p className="text-black/50 leading-[1.8] mb-8 text-[15px]">
                                Our work is focused on building scalable, implementation-ready solutions that balance strategic intent with on-ground realities. Breadboard brings together program design expertise, operational understanding, and analytical rigor to support organizations across the full project lifecycle.
                            </p>

                            {/* Feature highlights */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: 'architecture', label: 'Program Design' },
                                    { icon: 'insights', label: 'Analytical Rigor' },
                                    { icon: 'handshake', label: 'Institutional Partnerships' },
                                    { icon: 'trending_up', label: 'Scalable Solutions' },
                                ].map((f) => (
                                    <div key={f.label} className="flex items-center gap-3 p-3 bg-cream/70 group hover:bg-primary/10 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-primary text-xl">{f.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-black/50 group-hover:text-black transition-colors">{f.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          WHAT WE DO — Dark section with feature cards
          ═══════════════════════════════════════ */}
            <section className="py-28 md:py-36 bg-dark-surface relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Left — Heading */}
                        <div className="lg:col-span-2">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">What We Do</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                                Translating Strategy Into <span className="text-gradient">Measurable Outcomes</span>
                            </h2>
                            <p className="text-white/30 leading-[1.8] text-[15px]">
                                Breadboard Consulting supports organizations in designing, implementing, and strengthening development and impact-focused programs across diverse thematic areas and institutional contexts.
                            </p>
                            <Link to="/services" className="inline-flex items-center mt-8 text-sm font-bold text-primary hover:text-primary-dark uppercase tracking-wider group transition-colors">
                                Explore Our Services
                                <span className="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Right — Feature cards */}
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: 'assignment', title: 'Program Advisory', desc: 'Structured program models and operational frameworks for impact delivery.' },
                                { icon: 'school', title: 'Capacity Building', desc: 'Institutional strengthening and team development for sustained performance.' },
                                { icon: 'monitoring', title: 'Impact Measurement', desc: 'Data-driven evaluation and performance reporting systems.' },
                                { icon: 'campaign', title: 'Strategic Communication', desc: 'Positioning, outreach, and stakeholder engagement frameworks.' },
                                { icon: 'search_insights', title: 'Research Support', desc: 'Evidence-based diagnostics, sector studies, and knowledge products.' },
                                { icon: 'settings_suggest', title: 'Execution Planning', desc: 'Translating advisory into delivery-ready operational systems.' },
                            ].map((f, i) => (
                                <div key={f.title} className="group glass-card p-6 hover:bg-white/[0.06] transition-all duration-500 hover:border-primary/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                            <span className="material-symbols-outlined text-lg">{f.icon}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{f.title}</h4>
                                    </div>
                                    <p className="text-xs text-white/25 leading-relaxed pl-[52px]">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          IMAGE BREAK — Quote
          ═══════════════════════════════════════ */}
            <section className="relative h-[50vh] overflow-hidden img-zoom">
                <img src="/images/impact.png" alt="Community impact" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                        <div className="section-divider mx-auto mb-6"></div>
                        <p className="text-2xl md:text-4xl font-extrabold text-white max-w-3xl tracking-tight leading-tight italic">
                            "Continuity, institutional capacity, and system-level impact."
                        </p>
                        <p className="text-sm text-white/30 mt-4 uppercase tracking-[0.2em] font-semibold">Our Philosophy</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          OUR APPROACH — Cards
          ═══════════════════════════════════════ */}
            <section ref={approachRef} className="py-28 md:py-36 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-20 ${approachInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Our Approach</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
                            How We Work
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-black/40 leading-relaxed">
                            We focus on building solutions that are strategically aligned, operationally feasible, and designed for long-term sustainability.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${approachInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        {approachCards.map((card, i) => (
                            <div
                                key={card.title}
                                className="group bg-white border border-black/5 p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                <div className="absolute top-6 right-8 text-7xl font-extrabold text-black/[0.03] select-none">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="w-14 h-14 bg-primary/8 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">{card.title}</h4>
                                <p className="text-sm text-black/40 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
            <section ref={ctaRef} className="relative py-28 md:py-36 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>
                <div className={`relative max-w-4xl mx-auto px-4 text-center ${ctaInView ? 'animate-fade-up' : 'opacity-0'}`}>
                    <div className="section-divider mx-auto mb-8"></div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to amplify your impact?
                    </h2>
                    <p className="text-lg text-white/30 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking to build a CSR portfolio, strengthen institutional systems, or design scalable programs — let's work together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5">
                            Partner With Us
                        </Link>
                        <Link to="/services" className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-wider text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
