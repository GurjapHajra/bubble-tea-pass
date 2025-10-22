import React from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPage = () => {
    return (
        <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <section className="card" style={{ margin: '0 auto', maxWidth: 640, textAlign: 'center' }}>
                <h1 style={{ marginBottom: 8 }}>Subscribe — Coming Soon</h1>
                <p className="muted" style={{ marginBottom: 16 }}>
                    We’re polishing the payment flow. Check back shortly to join the Campus Tea Pass.
                </p>
                <Link className="btn primary" to="/coming-soon">Learn more</Link>
            </section>
        </div>
    );
};

export default SubscriptionPage;