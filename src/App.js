import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RedemptionPage from './pages/RedemptionPage';
import SubscriptionPage from './pages/SubscriptionPage';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Header />
          <main className="container">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/coming-soon" component={ComingSoonPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/redemption" component={RedemptionPage} />
              <Route path="/subscription" component={SubscriptionPage} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;