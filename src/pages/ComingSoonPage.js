import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const trimmed = email.trim();
    if (!trimmed) {
      setMessage('Please enter your email.');
      return;
    }
    // Basic email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    try {
      setSending(true);
      // Using EmailJS as requested
      const result = await emailjs.send(
        'service_h8qt39c',
        'template_7wkj45c',
        { email: trimmed },
        'ma6XvIdm8P5jP8Z8P'
      );
      // Mirror the provided behavior
      // eslint-disable-next-line no-alert
      alert('Email sent successfully!');
      // Clear input
      setEmail('');
      setMessage("You're on the waitlist! We'll email you when we launch.");
      if (result && result.text) {
        // Optional console log for debugging
        // eslint-disable-next-line no-console
        console.log(result.text);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error?.text || error);
      setMessage('Something went wrong. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <section className="card" style={{ margin: '0 auto', maxWidth: 640, textAlign: 'center' }}>
        <h1 style={{ marginBottom: 8 }}>Payments — Coming Soon</h1>
        <p className="muted" style={{ marginBottom: 16 }}>
          We’re putting the final touches on checkout. You’ll be able to subscribe to the Campus Tea Pass here soon.
        </p>
        <h3 style={{ margin: '8px 0' }}>Join the waitlist</h3>
        <p className="muted" style={{ marginBottom: 8 }}>
          Be first to know when we launch and get early access perks.
        </p>

        <form onSubmit={onSubmit} style={{ margin: '16px auto', maxWidth: 420, display: 'flex', gap: 8 }}>
          <input
            id="emailInput"
            type="email"
            placeholder="you@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email to join the waitlist"
            style={{ flex: 1 }}
          />
          <button className="btn primary" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Get on the waitlist'}
          </button>
        </form>
        {message ? (
          <p className="muted" role="status" aria-live="polite" style={{ marginTop: 4 }}>
            {message}
          </p>
        ) : null}

        <p className="muted small" style={{ marginTop: 8 }}>
          We’ll only email you about the waitlist. No spam, unsubscribe anytime.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
          <Link className="btn" to="/">Go back home</Link>
          <a className="btn" href="#subscribe">See plan details</a>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;
