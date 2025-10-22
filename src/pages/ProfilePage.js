import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Drinks Remaining: {user.drinksRemaining}</p>
                    <button onClick={() => {/* Logic for redeeming a drink */}}>
                        Redeem Drink
                    </button>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default ProfilePage;