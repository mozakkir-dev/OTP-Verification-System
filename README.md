# OTP Verification System

A frontend OTP verification simulation built with HTML, CSS, and JavaScript. It allows users to generate and verify a six-digit OTP within a 60-second validity period.

## Features

- Random six-digit OTP generation
- Real-time 60-second countdown
- OTP input validation and verification
- Success, invalid OTP, and expiration messages
- SessionStorage persistence across page refreshes in the same tab
- Automatic removal of expired OTP data from sessionStorage
- Timestamp-based expiration checks

## Technologies Used

- **HTML5** — Structure
- **CSS3** — Styling
- **JavaScript (Vanilla JS)** — OTP generation, validation, countdown, and storage
- **SessionStorage API** — Temporary data persistence

## How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Generate an OTP, enter the displayed code, and verify it before the timer expires.
4. Refresh the page to test session persistence.

## What I Learned

- Reusing logic through JavaScript functions
- Using `sessionStorage.setItem()`, `getItem()`, and `removeItem()`
- Working with DOM manipulation and event listeners
- Generating random numbers with `Math.random()`
- Managing countdowns with `setInterval()` and `clearInterval()`
- Using `Date.now()` for timestamp-based expiration
- Validating user input with conditional statements

## Security Note

This project is for educational purposes only. The OTP is generated, displayed, stored, and verified on the client side. It is not a secure production authentication system and does not send OTPs through SMS or email. Real-world OTP verification requires secure server-side generation, storage, validation, and rate limiting.
