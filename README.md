# Bubble Tea Pass

Welcome to the Bubble Tea Pass web application! This application allows users to subscribe to a bubble tea service, manage their subscriptions, make payments, and redeem drinks at participating shops.

## Features

- **User Subscription**: Users can sign up for a subscription plan to enjoy bubble tea.
- **Payment Integration**: Secure payment processing through Stripe for subscription payments.
- **Drink Redemption**: Users can redeem their drinks by scanning a QR code or pressing a button.

## Project Structure

```
bubble-tea-pass
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── PaymentForm.js
│   ├── context
│   │   └── AuthContext.js
│   ├── hooks
│   │   └── useAuth.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── ProfilePage.js
│   │   ├── RedemptionPage.js
│   │   └── SubscriptionPage.js
│   ├── services
│   │   ├── authService.js
│   │   ├── paymentService.js
│   │   └── redemptionService.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/bubble-tea-pass.git
   cd bubble-tea-pass
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- **Sign Up / Log In**: Users can create an account or log in to manage their subscriptions.
- **Subscribe**: Navigate to the Subscription page to choose a plan and enter payment details.
- **Redeem Drinks**: Go to the Redemption page to redeem drinks using the provided options.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.