import React from 'react';
import {ButtonConfig} from '../types';

type LinkButtonProps = Omit<ButtonConfig, 'id'>;

export const LinkButton: React.FC<LinkButtonProps> = ({
                                                          href,
                                                          icon,
                                                          label,
                                                          subtext,
                                                          primary = false,
                                                      }) => {
    const baseClasses =
        'group w-full flex items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-deep';

    const primaryClasses =
        'bg-indigo-deep text-white hover:bg-indigo-900 focus:ring-gold-muted';

    const secondaryClasses =
        'bg-white/10 border border-gold-muted/50 text-white hover:bg-white/20 hover:border-gold-muted focus:ring-gold-muted';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
        >
      <span
          className="text-2xl mr-4 transform transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
        {icon}
      </span>
            <div className="flex-grow text-left">
        <span className="font-bold tracking-wide uppercase text-sm">
          {label}
        </span>
                {subtext && (
                    <span className="block text-xs font-light opacity-80">
            {subtext}
          </span>
                )}
            </div>
        </a>
    );
};
