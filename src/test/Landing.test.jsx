import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from '../landing/Landing';

describe('Landing', () => {
  let onStartClick;
  let onCoopClick;

  beforeEach(() => {
    onStartClick = vi.fn();
    onCoopClick = vi.fn();
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

  it('calls onCoopClick when "Launch your cooperative" is clicked', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: /Launch your cooperative/i }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('renders the full cooperative service catalogue', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    [
      'Member Savings',
      'KYC Enablement',
      'Custom Branding',
      'AI Website',
      'Analytics',
      'Directory Listing',
    ].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
    // "Thrift Contribution" and "Loans" also appear as pillar headings above the
    // catalogue, so the catalogue entry is the second occurrence of each.
    expect(screen.getAllByText('Thrift Contribution').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Loans').length).toBeGreaterThanOrEqual(2);
  });

  it('calls onCoopClick from the free subdomain callout "Get started" button', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Get started' }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('renders the main app feature grid', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    [
      'AJO Daily Card Marking',
      'QR Physical Card System',
      'Cash Flow Monitoring',
      'Budget Planner',
      'Daily Expense Tracker',
      'Agent & Sub-Agent Network',
      'SMS & Email Notifications',
    ].forEach((title) => {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
    });
    // "Fixed Growth Funds" is also used as a badge label in the spotlight section above,
    // so the feature-grid card heading is the second occurrence.
    expect(screen.getAllByText('Fixed Growth Funds').length).toBeGreaterThanOrEqual(2);
  });

  it('calls onStartClick from the "Start Tracking" and "Start Investing" spotlight buttons', () => {
    render(<Landing onStartClick={onStartClick} onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: /Start Tracking/i }));
    fireEvent.click(screen.getByRole('button', { name: /Start Investing/i }));
    expect(onStartClick).toHaveBeenCalledTimes(2);
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
    fireEvent.click(screen.getByText('What are Fixed Growth Funds?'));

    expect(screen.getByText(/two separate products/i)).toBeInTheDocument();
    expect(screen.getByText(/lock a sum for 3 to 12 months/i)).toBeInTheDocument();
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
