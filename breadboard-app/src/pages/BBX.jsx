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

/* ─── Section data ─── */
const bbxSections = [
    {
        icon: 'edit_note',
        title: 'Field Notes',
        desc: 'Blogs, observations from the field, commentary on sector trends, program design insights — and lessons from implementation.',
        image: '/images/bred-coffee-nobg-removebg-preview.png',
        color: '#ffbd59',
    },
    {
        icon: 'forum',
        title: 'Conversations',
        desc: 'Interviews, podcasts, fireside chats, and practitioner dialogues — long-form discussions with people doing important work.',
        image: '/images/bred-sitting-nobg-removebg-preview.png',
        color: '#e5a740',
    },
    {
        icon: 'scuba_diving',
        title: 'Deep Dives',
        desc: 'Explainer pieces, long-form research, and concept breakdowns — structured analysis of important themes.',
        image: '/images/bred-glasses-nobg-removebg-preview.png',
        color: '#d4963a',
    },
    {
        icon: 'cell_tower',
        title: 'Signal Boost',
        desc: 'Spotlighting interesting reports, tools and frameworks, new policies, innovative programs — work that deserves attention.',
        image: '/images/bred-tie-nobg-removebg-preview.png',
        color: '#c4862e',
    },
    {
        icon: 'explore',
        title: "Bred's Rabbit Holes",
        desc: 'Interesting finds, unusual insights, and things Bred stumbled upon while procrastinating.',
        image: '/images/bred-coffee-nobg-removebg-preview.png',
        color: '#ffbd59',
        featured: true,
    },
    {
        icon: 'event',
        title: 'Events',
        desc: 'Upcoming and past events, workshops, panel discussions, and sector gatherings that Bred thinks you should know about.',
        image: '/images/bred-tie-nobg-removebg-preview.png',
        color: '#e5a740',
    },
];

/* Social links */
const socials = [
    { name: 'Instagram', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> },
    { name: 'Facebook', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg> },
    { name: 'LinkedIn', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> },
    { name: 'YouTube', icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> },
];

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

export default function BBX() {
    const [heroRef, heroInView] = useInView(0.1);
    const [sectionsRef, sectionsInView] = useInView(0.08);
    const [askRef, askInView] = useInView(0.1);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bredBounce, setBredBounce] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setBredBounce(true);
            setTimeout(() => setBredBounce(false), 600);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.target;
            const formData = new FormData(form);

            // Same script URL as /contact — feeds into the same Google Sheet
            const scriptURL = "https://script.google.com/macros/s/AKfycbwlTYCD2GLjJT70vtuiB4ZYgzIMDpmgRAsaLMcEoQLqDulKSIxmLSpILOH9tRHySSk1rA/exec";

            const params = new URLSearchParams();
            params.append("source", "BBX - Ask Bred");
            formData.forEach((value, key) => {
                params.append(key, value);
            });

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString()
            });

            setSubmitted(true);
            form.reset();

            // Show the form back again after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ═══════════════════════════════════════
          HERO — "Hi, I'm Bred…"
          Bred character on LEFT, text + socials on RIGHT
          ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
                    {/* Floating dots */}
                    <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
                    <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-32 left-[25%] w-1 h-1 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-60 right-[30%] w-2.5 h-2.5 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.015]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23ffbd59' fill-opacity='1'/%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* LEFT — Bred character (coffee mug pose) */}
                        <div className={`flex justify-center ${heroInView ? 'animate-fade-up' : 'opacity-0'}`}>
                            <div className={`relative transition-transform duration-500 ${bredBounce ? '-translate-y-4' : ''}`}>
                                <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
                                    {/* Glow ring behind character */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-primary/5 blur-2xl scale-110"></div>
                                    <img
                                        src="/images/bred-coffee-nobg-removebg-preview.png"
                                        alt="Bred – BBX mascot, holding coffee mug"
                                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_60px_rgba(255,189,89,0.15)]"
                                    />
                                </div>
                                {/* Floor glow */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-5 bg-primary/8 rounded-full blur-xl"></div>
                            </div>
                        </div>

                        {/* RIGHT — Intro text + social media */}
                        <div className={`${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
                                Hi, I'm <span className="text-gradient">Bred</span>.
                                <br />
                                <span className="text-white/60">Bored Bred.</span>
                            </h1>

                            <p className="text-lg text-primary/80 font-semibold mb-6">
                                A professional yapper and info-dumper.
                            </p>

                            <div className="space-y-4 text-white/40 leading-relaxed">
                                <p>
                                    I get bored easily, so I like to overstimulate my hyper-curious brain by collecting interesting facts, unusual insights, surprising data points, conversations with people doing important work — and occasionally some tea <span className="text-primary">;</span>).
                                </p>
                                <p>
                                    Naturally, I have to share them all with you. <span className="text-white font-semibold">BBX</span> is the space where it all lands.
                                </p>
                                <p className="text-white/50 italic">
                                    Some call it oddball stimming.
                                    <br />
                                    I call it a good day at work.
                                </p>
                                <p>
                                    If you're also into interesting stuff, slightly obsessive curiosity, and top-tier sector jokes, we'll get along.
                                </p>
                                <p>
                                    You can also find me wandering around our social media channels.
                                    <br />
                                    <span className="text-white/60">Follow us and come say hi.</span>
                                </p>
                            </div>

                            {/* Social media icons */}
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <div className="flex gap-3">
                                    {socials.map(({ name, icon }) => (
                                        <a
                                            key={name}
                                            href={name === 'Instagram' ? 'https://www.instagram.com/breadboard.in' : name === 'X' ? 'https://x.com/breadboardindia?s=21' : name === 'YouTube' ? 'https://www.youtube.com/@BreadboardConsulting' : name === 'LinkedIn' ? 'https://www.linkedin.com/company/breadboard-india/' : name === 'Facebook' ? 'https://www.facebook.com/profile.php?id=61584892956215' : '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-primary hover:text-black hover:border-primary flex items-center justify-center transition-all duration-300 text-white/40 rounded-lg"
                                            aria-label={name}
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Explore</span>
                    <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CONTENT SECTIONS GRID
          ═══════════════════════════════════════ */}
            <section ref={sectionsRef} className="py-28 md:py-36 bg-white relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-16 ${sectionsInView ? 'animate-fade-in' : 'opacity-0'}`}></div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 ${sectionsInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                        {bbxSections.map((section, i) => (
                            <div
                                key={section.title}
                                className="group bg-cream border border-black/5 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden cursor-pointer"
                                onMouseEnter={() => setHoveredCard(i)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                <div className="p-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 mb-6 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 rounded-2xl">
                                        <span className="material-symbols-outlined text-4xl">{section.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors mb-6">{section.title}</h3>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary/60">
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"></span>
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mt-16 ${sectionsInView ? 'animate-fade-in delay-500' : 'opacity-0'}`}></div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          ASK BRED
          ═══════════════════════════════════════ */}
            <section ref={askRef} className="py-28 md:py-36 bg-dark-surface relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffbd59' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${askInView ? 'animate-fade-up' : 'opacity-0'}`}>
                        {/* LEFT */}
                        <div className="lg:sticky lg:top-32">
                            <div className="section-divider mb-6"></div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                                Ask Bred
                            </h2>
                            <div className="space-y-4 mb-10">
                                <p className="text-lg text-white/30 leading-relaxed">
                                    Bred spends an unhealthy amount of time going down research rabbit holes and talking to interesting people. If there's something you've been wondering about — an idea, a trend, a confusing concept, or something odd you've noticed in the sector — send it in.
                                </p>
                                <p className="text-white/40 text-sm italic">
                                    If it sparks Bred's curiosity, it might turn into a BBX post, a conversation, or a curious little investigation.
                                </p>
                            </div>
                            <div className="relative flex items-center gap-5">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl scale-125"></div>
                                    <img
                                        src="/images/bred-glasses-nobg-removebg-preview.png"
                                        alt="Bred thinking"
                                        className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(255,189,89,0.1)]"
                                    />
                                </div>
                                <div>
                                    <p className="text-white/25 text-sm leading-relaxed max-w-xs">
                                        <span className="text-primary font-semibold">"</span>
                                        Drop your question here. Bred reads everything.
                                        <span className="text-primary font-semibold">"</span>
                                    </p>
                                    <div className="mt-3 flex gap-2">
                                        {['🔍', '📝', '☕', '🧠'].map((emoji, idx) => (
                                            <span key={idx} className="text-xl opacity-30 hover:opacity-80 transition-opacity cursor-default" style={{ animationDelay: `${idx * 0.3}s` }}>
                                                {emoji}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Form */}
                        <div className={`${askInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                            {submitted ? (
                                <div className="glass-card p-12 md:p-16 text-center">
                                    <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 flex items-center justify-center rounded-full">
                                        <span className="material-symbols-outlined text-primary text-4xl">mail</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Bred's on it!</h3>
                                    <p className="text-white/30 max-w-md mx-auto">
                                        Your question has been received. If it sparks something, you'll see it pop up on BBX.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 relative">
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary-dark to-primary"></div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="ask-name" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                                                Name <span className="text-primary">*</span>
                                            </label>
                                            <input type="text" id="ask-name" name="name" required className="w-full border-0 border-b-2 border-white/10 bg-transparent py-3 text-sm text-white placeholder-white/20 focus:border-primary focus:ring-0 transition-colors" placeholder="Your full name" />
                                        </div>
                                        <div>
                                            <label htmlFor="ask-email" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                                                Email Address <span className="text-primary">*</span>
                                            </label>
                                            <input type="email" id="ask-email" name="email" required className="w-full border-0 border-b-2 border-white/10 bg-transparent py-3 text-sm text-white placeholder-white/20 focus:border-primary focus:ring-0 transition-colors" placeholder="info@breadboard.in" />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label htmlFor="ask-msg" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                                            Your Message <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            id="ask-msg"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full border-0 border-b-2 border-white/10 bg-transparent py-3 text-sm text-white placeholder-white/20 focus:border-primary focus:ring-0 transition-colors resize-none"
                                            placeholder={"What actually makes monitoring systems work?\nCan Bred explain something confusing?"}
                                        ></textarea>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {isSubmitting ? 'SENDING...' : 'SEND IN'}
                                        {!isSubmitting && <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}