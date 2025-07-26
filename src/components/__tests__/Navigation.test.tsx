import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';

describe('Navigation', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  it('renders navigation with logo and menu items', () => {
    render(<Navigation />);
    
    // Check if logo is present
    expect(screen.getByAltText('F.T. Commercials Logo')).toBeInTheDocument();
    
    // Check if navigation items are present (use getAllByText to handle multiple instances)
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText('Services')).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText('About')).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText('Contact')).toHaveLength(2); // Desktop and mobile
  });

  it('has proper ARIA labels and roles', () => {
    render(<Navigation />);
    
    // Check navigation role
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Check if navigation has proper aria-label
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('mobile menu button has proper accessibility attributes', () => {
    render(<Navigation />);
    
    const menuButton = screen.getByLabelText('Open navigation menu');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    expect(menuButton).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('opens mobile menu when menu button is clicked', () => {
    render(<Navigation />);
    
    const menuButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(menuButton);
    
    // Check if menu button aria-expanded changes
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Check if mobile menu is visible
    const mobileMenu = screen.getByRole('menu');
    expect(mobileMenu).toBeInTheDocument();
  });

  it('closes mobile menu when escape key is pressed', () => {
    render(<Navigation />);
    
    const menuButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(menuButton);
    
    // Menu should be open
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Press escape key
    fireEvent.keyDown(document, { key: 'Escape' });
    
    // Menu should be closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('has phone number links with proper accessibility', () => {
    render(<Navigation />);
    
    // Check office phone number (use getAllByLabelText to handle multiple instances)
    const officePhones = screen.getAllByLabelText('Call office: 01777 871493');
    expect(officePhones).toHaveLength(2); // Mobile button and mobile menu
    expect(officePhones[0]).toHaveAttribute('href', 'tel:01777871493');
    
    // Check mobile phone number (in mobile menu)
    const menuButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(menuButton);
    
    const mobilePhone = screen.getByLabelText('Call mobile: 07967 176567');
    expect(mobilePhone).toBeInTheDocument();
    expect(mobilePhone).toHaveAttribute('href', 'tel:07967176567');
  });
}); 