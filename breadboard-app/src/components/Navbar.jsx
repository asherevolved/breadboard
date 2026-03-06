import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/contact', label: 'Contact' },
        { to: '/career', label: 'Career' },
        { to: '/bbx', label: 'BBX' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group" aria-label="Breadboard Consulting Home">
                        <div className="relative flex items-center">
                            <span className={`border-l-[3px] border-b-[3px] border-primary h-8 w-3 mr-0.5 relative top-[2px] inline-block transition-all duration-300 ${!scrolled ? 'border-primary' : 'border-primary'}`}></span>
                            <span className={`font-extrabold text-xl tracking-tight lowercase select-none transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>breadboard</span>
                            <span className={`border-r-[3px] border-t-[3px] border-primary h-8 w-3 ml-0.5 relative bottom-[2px] inline-block transition-all duration-300`}></span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${isActive(to)
                                    ? 'text-primary'
                                    : scrolled
                                        ? 'text-black/60 hover:text-primary'
                                        : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {label}
                                {isActive(to) && (
                                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary"></span>
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-4 inline-flex items-center px-7 py-2.5 text-[13px] font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className={`pb-6 pt-2 rounded-b-2xl ${scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-xl'}`}>
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`block py-3.5 px-6 text-sm font-semibold uppercase tracking-wider transition-colors ${isActive(to)
                                    ? 'text-primary bg-primary/5'
                                    : scrolled
                                        ? 'text-black/60 hover:text-primary'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="px-6 pt-2">
                            <Link
                                to="/contact"
                                className="block text-center py-3 text-sm font-bold uppercase tracking-wider text-black bg-primary hover:bg-primary-dark transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
