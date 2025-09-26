import React from 'react';
import {AquaVistaLogo} from './components/AquaVistaLogo';
import {LinkButton} from './components/LinkButton';
import {ButtonConfig} from './types';

const buttons: ButtonConfig[] = [
    {
        id: 'book',
        href: '#',
        icon: '✅',
        label: 'CHECK DATES & BOOK NOW',
        subtext: '(Limited Weekends!)',
        primary: true,
    },
    {
        id: 'tour',
        href: '#',
        icon: '📸',
        label: 'TAKE THE VILLA PHOTO TOUR',
    },
    {
        id: 'reviews',
        href: '#',
        icon: '⭐',
        label: 'READ OUR 5-STAR GUEST REVIEWS',
    },
    {
        id: 'maps',
        href: '#',
        icon: '📍',
        label: 'VIEW ON GOOGLE MAPS',
    },
    {
        id: 'faq',
        href: '#',
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
                style={{backgroundImage: "url('https://picsum.photos/id/106/1920/1080')"}}
            ></div>

            {/* Blur and Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-2xl"></div>

            {/* Content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
                <main className="w-full max-w-lg flex flex-col items-center text-center animate-fade-in">
                    <AquaVistaLogo className="h-24 w-24 mb-4 text-gold-muted/80"/>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Aqua Vista
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
