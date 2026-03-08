import { useEffect, useRef, useState } from 'react';
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

const serviceBlocks = [
    {
        id: 'csr',
        title: 'CSR & Corporate Advisory',
        img: '/images/services-csr.png',
        desc: 'We support corporates in designing, implementing, and managing end-to-end CSR portfolios aligned with regulatory compliance, organizational priorities, and impact outcomes.',
        items: [
            'CSR strategy development and multi-year portfolio planning',
            'Program architecture and thematic focus design',
            'Implementation partner identification and engagement frameworks',
            'CSR portfolio monitoring and performance tracking',
            'Compliance advisory and statutory reporting support',
        ],
    },
    {
        id: 'development',
        title: 'Development & Impact Consulting',
        img: '/images/services-dev.png',
        desc: 'We work with institutions to design scalable development programs and establish robust impact measurement systems.',
        items: [
            'Program design and scale-up advisory',
            'Monitoring and evaluation system development',
            'Impact assessment studies (baseline, midline, endline)',
            'Outcome tracking and performance reporting frameworks',
        ],
    },
    {
        id: 'research',
        title: 'Research & Advocacy Advisory',
        img: '/images/services-research.png',
        desc: 'We provide evidence-driven research and advisory support to inform policy engagement and advocacy initiatives.',
        items: [
            'Policy research, sector studies, and diagnostics',
            'White papers, issue briefs, and knowledge products',
            'Stakeholder mapping and engagement strategy',
            'Advocacy communication and campaign planning',
        ],
    },
    {
        id: 'marketing',
        title: 'Marketing Strategy & Digital Enablement',
        img: '/images/impact.png',
        desc: 'We support organizations in building structured marketing and communication systems that strengthen brand presence, outreach, and stakeholder engagement.',
        items: [
            'Marketing and communication strategy development',
            'Website planning, optimization, and digital presence setup',
            'Brand positioning and visual identity support',
            'Content strategy, storytelling, and campaign communication',
            'Social media strategy, management, and outreach execution',
        ],
    },
];

const partners = [
    { icon: 'domain', title: 'Corporates & CSR Foundations', desc: 'We work with corporate CSR teams, industry institutions, and corporate foundations to design compliant, strategy-aligned portfolios and build structured delivery and performance systems. Our support spans program architecture, implementation oversight, impact measurement, and governance-aligned reporting frameworks.' },
    { icon: 'volunteer_activism', title: 'Not-for-Profit & Development Organizations', desc: 'We support non-profit institutions, development agencies, social enterprises and philanthropic organizations in strengthening program design, operational systems, monitoring frameworks, and impact communication. Our work includes strategic positioning, knowledge products, digital presence strengthening, and stakeholder engagement frameworks that enhance credibility and outreach.' },
    { icon: 'account_balance', title: 'Public Systems & Government Institutions', desc: 'We engage with public institutions and government stakeholders to support structured planning, institutional strengthening, performance accountability, and evidence-based decision systems across sectors and geographies.' },
    { icon: 'lightbulb', title: 'Mission-Driven Institutions & Sectoral Organizations', desc: 'We work with business enterprises, educational institutions, and healthcare systems to strengthen governance, operational delivery, brand positioning, and structured communication strategies. Our support helps institutions align program execution with strategic visibility, stakeholder engagement, and long-term sustainability.' },
];

export default function Services() {
    const [heroRef, heroInView] = useInView(0.1);
    const [partnersRef, partnersInView] = useInView();

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 opacity-[0.06]">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0 100 L20 80 L20 20 L50 20 L80 50 L100 50" fill="none" stroke="#ffbd59" strokeWidth="0.3" />
                        <path d="M0 50 L30 50 L50 70 L80 70 L100 90" fill="none" stroke="#ffbd59" strokeWidth="0.3" />
                        <path d="M10 0 L10 30 L40 60 L70 60 L70 100" fill="none" stroke="#ffbd59" strokeWidth="0.3" />
                        <circle cx="20" cy="80" r="1" fill="#ffbd59" />
                        <circle cx="50" cy="20" r="1" fill="#ffbd59" />
                        <circle cx="80" cy="50" r="1" fill="#ffbd59" />
                    </svg>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                    <div className={`${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        <div className="section-divider mx-auto mb-8"></div>
                    </div>
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p className={`max-w-3xl mx-auto text-lg md:text-xl text-white/40 leading-relaxed ${heroInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        We provide advisory and implementation support that enables institutions to design stronger programs, build reliable systems, and demonstrate measurable impact. Our services span strategy, delivery, evaluation, and institutional communication.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          SERVICES — Alternating layout
          ═══════════════════════════════════════ */}
            {serviceBlocks.map((svc, i) => {
                const isEven = i % 2 === 0;
                return <ServiceBlock key={svc.id} svc={svc} isEven={isEven} index={i} />;
            })}

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
          CTA
          ═══════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/strategy.png" alt="Strategy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <div className="section-divider mx-auto mb-8"></div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Let's Build Impact That Lasts
                    </h2>
                    <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Connect with us to design structured, scalable, and measurable impact systems.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-12 py-5 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-0.5 group"
                    >
                        Schedule a Consultation
                        <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </>
    );
}

/* ─── Individual service block component ─── */
function ServiceBlock({ svc, isEven, index }) {
    const [ref, inView] = useInView(0.1);

    return (
        <section
            ref={ref}
            id={svc.id}
            className={`py-0 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[550px] ${isEven ? '' : 'lg:direction-rtl'}`}>
                {/* Image */}
                <div className={`relative overflow-hidden img-zoom ${isEven ? 'lg:order-1' : 'lg:order-2'} ${inView ? (isEven ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'}`}>
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover min-h-[350px]" />
                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-black/10`}></div>
                </div>

                {/* Content */}
                <div className={`flex items-center ${isEven ? 'lg:order-2' : 'lg:order-1'} ${inView ? (isEven ? 'animate-slide-right' : 'animate-slide-left') : 'opacity-0'}`}>
                    <div className="px-8 md:px-16 lg:px-20 py-16 lg:py-20 w-full">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight mb-6">{svc.title}</h2>
                        <p className="text-black/40 leading-relaxed mb-8 text-[15px]">{svc.desc}</p>

                        <div className="space-y-3">
                            {svc.items.map((item) => (
                                <div key={item} className="flex items-start gap-3 group">
                                    <div className="w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-primary text-xs group-hover:text-black transition-colors">check</span>
                                    </div>
                                    <span className="text-sm text-black/50 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex items-center mt-10 text-sm font-bold text-primary hover:text-primary-dark uppercase tracking-wider group transition-colors"
                        >
                            Enquire Now
                            <span className="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
