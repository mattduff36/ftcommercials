import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

// Mock the email service
jest.mock('../../lib/utils/emailService', () => ({
  sendContactEmail: jest.fn(),
  sendEmail: jest.fn(),
}));

// Mock fetch API
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Mock fetch to return a successful response
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  it('renders contact form with all required fields', () => {
    render(<ContactForm />);
    
    // Check for form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('has proper form accessibility attributes', () => {
    render(<ContactForm />);
    
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    
    // Check if form has proper aria-label
    expect(form).toHaveAttribute('aria-label', 'Contact form');
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    
    // Mock fetch to fail so validation errors show up
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
    
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email format', async () => {
    const user = userEvent.setup();
    
    // Mock fetch to fail so validation errors show up
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
    
    render(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid phone format', async () => {
    const user = userEvent.setup();
    
    // Mock fetch to fail so validation errors show up
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
    
    render(<ContactForm />);
    
    const phoneInput = screen.getByLabelText(/phone/i);
    await user.type(phoneInput, '123');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid phone number/i)).toBeInTheDocument();
    });
  });

  it('accepts valid form submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Fill in valid form data
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '07123456789');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Form should be valid and ready for submission
    await waitFor(() => {
      expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Message is required/i)).not.toBeInTheDocument();
    });
  });

  it('has proper focus management', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    const nameInput = screen.getByLabelText(/name/i);
    await user.click(nameInput);
    
    expect(nameInput).toHaveFocus();
  });
}); 