import React, { useState } from 'react';

const PaymentForm = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // UI-only mock: basic client-side validation
        if (!cardNumber || !expiry || !cvc) {
            setError('Please fill out all payment fields.');
            setSuccess(false);
            return;
        }
        // Simulate a successful payment
        await new Promise((r) => setTimeout(r, 500));
        setSuccess(true);
        setError(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Card Number</label>
                <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Expiry</label>
                <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                />
            </div>
            <div>
                <label>CVC</label>
                <input
                    type="text"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                />
            </div>
            <button type="submit">Subscribe</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>Payment successful! Thank you for subscribing.</div>}
        </form>
    );
};

export default PaymentForm;