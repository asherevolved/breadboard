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

export default function Career() {
    const [heroRef, heroInView] = useInView(0.1);
    const [valuesRef, valuesInView] = useInView();
    const [openingsRef, openingsInView] = useInView();

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/hero.png" alt="Careers at Breadboard" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                    <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <div className="section-divider mx-auto mb-8"></div>
                    </div>
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        Work With <span className="text-gradient">Us</span>
                    </h1>
                    <p className={`max-w-3xl mx-auto text-lg md:text-xl text-white/40 leading-relaxed ${heroInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        At Breadboard, we engage with complex institutional challenges that demand clarity, accountability, and thoughtful execution. We value structural thinking, execution discipline, analytical rigor, and institutional integrity — principles that guide the way we work and the people we work with.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          VALUES
          ═══════════════════════════════════════ */}
            <section ref={valuesRef} className="py-28 md:py-36 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 ${valuesInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-10">
                            What We Stand For
                        </h2>

                        {/* Icon grid — before the closing line */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[
                                { icon: 'psychology', label: 'Structural Thinking' },
                                { icon: 'precision_manufacturing', label: 'Execution Discipline' },
                                { icon: 'analytics', label: 'Analytical Rigor' },
                                { icon: 'verified', label: 'Institutional Integrity' },
                            ].map((v) => (
                                <div key={v.label} className="group bg-cream border border-black/5 p-8 text-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                    <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                                    </div>
                                    <span className="text-xs font-bold text-black/60 uppercase tracking-wider">{v.label}</span>
                                </div>
                            ))}
                        </div>

                        <p className="max-w-3xl mx-auto text-lg text-black/40 leading-relaxed">
                            If these values resonate with you, we invite you to apply for the open roles that align with your expertise and interests.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          JOB OPENINGS
          ═══════════════════════════════════════ */}
            <section ref={openingsRef} className="py-28 md:py-36 bg-dark-surface relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center mb-16 ${openingsInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Job Openings
                        </h2>
                    </div>

                    {/* Coming Soon State */}
                    <div className={`${openingsInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        <div className="glass-card p-12 md:p-16 text-center">
                            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 flex items-center justify-center rounded-full">
                                <span className="material-symbols-outlined text-primary text-4xl">work</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                No Open Positions Right Now
                            </h3>
                            <p className="text-white/30 max-w-lg mx-auto leading-relaxed mb-8">
                                We're not actively hiring at the moment, but we're always looking for exceptional talent. Check back soon or connect with us on LinkedIn.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://www.linkedin.com/company/breadboard-india/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group">
                                    Follow on LinkedIn
                                    <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
