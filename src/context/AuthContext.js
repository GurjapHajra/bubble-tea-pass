import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize auth state from localStorage (UI-only mock)
        const existingUser = JSON.parse(localStorage.getItem('user'));
        if (existingUser) {
            setUser(existingUser);
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login: create a simple user object
        const mockUser = {
            id: 'demo-user',
            name: email.split('@')[0],
            email,
            drinksRemaining: 10,
        };
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
    };

    const signup = async (email, password) => {
        // Mock signup behaves like login for UI-only
        const mockUser = {
            id: 'demo-user',
            name: email.split('@')[0],
            email,
            drinksRemaining: 10,
        };
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
    };

    const logout = async () => {
        // Mock logout
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};