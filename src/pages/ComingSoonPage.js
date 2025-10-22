import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoonPage = () => {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <section className="card" style={{ margin: '0 auto', maxWidth: 640, textAlign: 'center' }}>
        <h1 style={{ marginBottom: 8 }}>Payments — Coming Soon</h1>
        <p className="muted" style={{ marginBottom: 16 }}>
          We’re putting the final touches on checkout. You’ll be able to subscribe to the Campus Tea Pass here soon.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn primary" to="/">Go back home</Link>
          <a className="btn" href="#subscribe">See plan details</a>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;
