
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { RequestQuoteButton } from './RequestQuoteButton';

interface NavbarDesktopMenuProps {
  isScrolled: boolean;
}

export const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({ isScrolled }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <nav className="flex items-center space-x-8">
        {/* Navigation links */}
        <Link
          to="/"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          HOME
        </Link>
        
        <Link
          to="/products"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          PRODUCTS
        </Link>
        
        <Link
          to="/about-us"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          ABOUT US
        </Link>
        
        <Link
          to="/testimonials"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          TESTIMONIALS
        </Link>
        
        <Link
          to="/#contact"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          CONTACT US
        </Link>
      </nav>
      
      <RequestQuoteButton />
    </div>
  );
};
