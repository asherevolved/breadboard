import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const pathTitles = {
            '/': 'Breadboard Consulting',
            '/about': 'About Us | Breadboard Consulting',
            '/services': 'Services | Breadboard Consulting',
            '/contact': 'Contact | Breadboard Consulting',
            '/career': 'Careers | Breadboard Consulting',
            '/bbx': 'BBX - Breadboard Exchange'
        };

        const currentTitle = pathTitles[pathname] || 'Breadboard Consulting';
        document.title = currentTitle;
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
