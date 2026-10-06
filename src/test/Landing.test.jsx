import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from '../landing/Landing';

describe('Landing', () => {
  let onStartClick;
  let onCoopClick;
  let onMerchantClick;

  beforeEach(() => {
    onStartClick = vi.fn();
    onCoopClick = vi.fn();
    onMerchantClick = vi.fn();
  });

  it('renders the hero headline and highlight stats', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.getByText(/Nigeria's complete/i)).toBeInTheDocument();
    expect(screen.getByText('₦2.4T+')).toBeInTheDocument();
    expect(screen.getByText('40,000+')).toBeInTheDocument();
    expect(screen.getByText('80M+')).toBeInTheDocument();
  });

  it('calls onStartClick when a "Personal Finance App" button is clicked', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    const buttons = screen.getAllByRole('button', { name: /Personal Finance App/i });
    expect(buttons.length).toBeGreaterThanOrEqual(2);
    fireEvent.click(buttons[0]);
    expect(onStartClick).toHaveBeenCalledTimes(1);
    expect(onCoopClick).not.toHaveBeenCalled();
  });

  it('calls onCoopClick when a "Run a Cooperative" button is clicked', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    const buttons = screen.getAllByRole('button', { name: /Run a Cooperative/i });
    expect(buttons.length).toBeGreaterThanOrEqual(2);
    fireEvent.click(buttons[0]);
    expect(onCoopClick).toHaveBeenCalledTimes(1);
    expect(onStartClick).not.toHaveBeenCalled();
  });

  it('renders the CoopX by Kopkad section with its three core pillars', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.getByText('CoopX by Kopkad')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Member Savings Wallet' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Thrift Contribution' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Loans' })).toBeInTheDocument();
  });

  it('calls onCoopClick when "Explore Cooperative by Kopkad" is clicked', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: /Explore Cooperative by Kopkad/i }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('gives only an overview of the wider catalogue and points to the coop site', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    // The detailed 8-item service grid moved to cooperative.kopkad.ng — the
    // landing page keeps a one-line summary and a link instead.
    expect(screen.queryByText('KYC Enablement')).not.toBeInTheDocument();
    expect(screen.queryByText('Directory Listing')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'cooperative.kopkad.ng' }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('renders the main app feature grid', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    [
      'AJO Daily Card Marking',
      'QR Physical Card System',
      'Wallet & Account Number',
      'Merchant POS',
      'Pay Without Data',
      'SMS & Email Notifications',
    ].forEach((title) => {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
    });
    // Cash flow / budgets / expenses and the sub-agent network are no longer
    // offered to main-app users, so the landing page must not advertise them.
    ['Cash Flow Monitoring', 'Budget Planner', 'Daily Expense Tracker', 'Agent & Sub-Agent Network'].forEach((title) => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: /Start Tracking/i })).not.toBeInTheDocument();
    // "Locked Savings" is also used as a badge label in the spotlight section above,
    // so the feature-grid card heading is the second occurrence.
    expect(screen.getAllByText("Locked Savings").length).toBeGreaterThanOrEqual(2);
  });

  it('renders the merchant POS spotlight with its three POS actions and the QR account', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} onMerchantClick={onMerchantClick} />);
    expect(document.getElementById('merchants')).toBeInTheDocument();
    expect(screen.getByText(/Your phone is the POS\. Your customer doesn.t need one\./)).toBeInTheDocument();
    ['Charge Customer', 'To Kopkad', 'To Bank', 'One account, one QR'].forEach((title) => {
      expect(screen.getByText(title, { selector: 'p' })).toBeInTheDocument();
    });
  });

  it('calls onMerchantClick from "Become a Merchant" and onStartClick from "Start Investing"', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} onMerchantClick={onMerchantClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Become a Merchant' }));
    expect(onMerchantClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: /Start Investing/i }));
    expect(onStartClick).toHaveBeenCalledTimes(1);
  });

  it('renders the "How It Works" steps in order', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.getByText('Sign Up & Verify')).toBeInTheDocument();
    expect(screen.getByText('Set Up Your Operation')).toBeInTheDocument();
    expect(screen.getByText('Grow, Track & Pay Out')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('calls the correct handler for the "How It Works" CTA buttons', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: /Start with the Main App/i }));
    expect(onStartClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: /Launch a Cooperative/i }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('renders all three testimonials', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.getByText('Amaka O.')).toBeInTheDocument();
    expect(screen.getByText('Chukwudi E.')).toBeInTheDocument();
    expect(screen.getByText('Fatima B.')).toBeInTheDocument();
    expect(screen.getByText(/I used to carry exercise books/i)).toBeInTheDocument();
  });

  it('FAQ answers are hidden until their question is clicked, and toggle closed again', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    const question = screen.getByText('What is Kopkad?');
    expect(screen.queryByText(/two separate products/i)).not.toBeInTheDocument();

    fireEvent.click(question);
    expect(screen.getByText(/two separate products/i)).toBeInTheDocument();

    fireEvent.click(question);
    expect(screen.queryByText(/two separate products/i)).not.toBeInTheDocument();
  });

  it('each FAQ item toggles independently', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByText('What is Kopkad?'));
    fireEvent.click(screen.getByText("What is Locked Savings?"));

    expect(screen.getByText(/two separate products/i)).toBeInTheDocument();
    expect(screen.getByText(/lock a sum for 3 to 12 months/i)).toBeInTheDocument();
  });

  it('answers the merchant FAQs and no longer has the Cash Flow Monitor FAQ', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.queryByText('How does the Cash Flow Monitor work?')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('How does a merchant charge a customer?'));
    expect(screen.getByText(/6-digit code that expires in 3 minutes/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Do my customers need the Kopkad app, a smartphone, or data?'));
    expect(screen.getByText(/even a basic phone works/i)).toBeInTheDocument();
  });

  it('renders the final CTA section and wires both buttons to their handlers', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    expect(screen.getByText('Ready to take control of your finances?')).toBeInTheDocument();

    const startButtons = screen.getAllByRole('button', { name: /Personal Finance App/i });
    const coopButtons = screen.getAllByRole('button', { name: /Run a Cooperative/i });

    fireEvent.click(startButtons[startButtons.length - 1]);
    fireEvent.click(coopButtons[coopButtons.length - 1]);

    expect(onStartClick).toHaveBeenCalled();
    expect(onCoopClick).toHaveBeenCalled();
  });

  it('renders without crashing and without invoking handlers when props are omitted', () => {
    expect(() => render(<Landing />)).not.toThrow();
    const buttons = screen.getAllByRole('button', { name: /Personal Finance App/i });
    expect(() => fireEvent.click(buttons[0])).not.toThrow();
  });
});
