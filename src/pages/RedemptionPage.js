import React from 'react';
import useAuth from '../hooks/useAuth';

const RedemptionPage = () => {
    const { user } = useAuth();

    const handleRedeem = async () => {
        // UI-only: simulate redeeming a drink
        alert('Drink redeemed successfully! (UI-only mock)');
    };

    return (
        <div>
            <h1>Redeem Your Drink</h1>
            <p>Welcome, {user?.name || 'Guest'}! You have {user?.drinksRemaining ?? 0} drinks remaining.</p>
            <button onClick={handleRedeem}>Redeem Drink</button>
            <p>Or scan the QR code below:</p>
            {/* QR code scanning functionality can be added here */}
        </div>
    );
};

export default RedemptionPage;