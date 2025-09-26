import React from 'react';
import {AquaVistaLogo} from './components/AquaVistaLogo';
import {LinkButton} from './components/LinkButton';
import {ButtonConfig} from './types';

const buttons: ButtonConfig[] = [
    {
        id: 'book',
        href: 'http://airbnb.co.in/h/theaquavista',
        icon: '✅',
        label: 'CHECK DATES & BOOK NOW',
        subtext: '(Limited Weekends!)',
        primary: true,
    },
    {
        id: 'tour',
        href: 'https://www.instagram.com/reel/DO9LPVDE1Dq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        icon: '📸',
        label: 'TAKE THE VILLA PHOTO TOUR',
    },
    {
        id: 'reviews',
        href: 'http://airbnb.co.in/h/theaquavista',
        icon: '⭐',
        label: 'READ OUR 5-STAR GUEST REVIEWS',
    },
    {
        id: 'maps',
        href: 'https://maps.app.goo.gl/nxX2p4Hw5Mm9eLNw5',
        icon: '📍',
        label: 'VIEW ON GOOGLE MAPS',
    },
    {
        id: 'faq',
        href: 'https://docs.google.com/document/d/1nS0iI5FfygXF-Icwv0vmEFDbtzyq6rw5QqTMm0SbYbY/edit?usp=sharing',
        icon: '❓',
        label: 'FAQs (Pets, Parties & Policies)',
    },
];

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full font-sans text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                style={{backgroundImage: "url('assets/pool.png')"}}
            ></div>

            {/* Blur and Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-2xl"></div>

            {/* Content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
                <main className="w-full max-w-lg flex flex-col items-center text-center animate-fade-in">
                    <AquaVistaLogo className="h-24 w-24 mb-4 text-gold-muted/80"/>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        The Aqua Vista
                    </h1>
                    <p className="mt-2 text-lg text-white/80">
                        Your blueprint for the perfect escape.
                    </p>

                    <div className="w-full max-w-md mt-10 flex flex-col items-stretch space-y-4">
                        {buttons.map((button) => (
                            <LinkButton key={button.id} {...button} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
