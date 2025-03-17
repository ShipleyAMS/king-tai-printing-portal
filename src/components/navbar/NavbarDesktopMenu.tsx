import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ProductsDropdownContent } from './ProductsDropdownContent';
import { RequestQuoteButton } from './RequestQuoteButton';

interface NavbarDesktopMenuProps {
  isScrolled: boolean;
}

export const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({ isScrolled }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <nav className="flex items-center space-x-8">
        {/* Home link */}
        <Link
          to="/"
          className={cn(
            'text-sm font-medium nav-link transition-colors',
            isScrolled ? 'text-[#007041]' : 'text-[#007041]'
          )}
        >
          HOME
        </Link>
        
        {/* Products Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                'text-sm font-medium transition-colors',
                isScrolled ? 'text-[#007041]' : 'text-[#007041]'
              )}>PRODUCTS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ProductsDropdownContent />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Other navigation links */}
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
      
      {/* Request Custom Quote Button */}
      <RequestQuoteButton />
    </div>
  );
};
