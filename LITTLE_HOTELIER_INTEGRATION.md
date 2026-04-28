# Little Hotelier & Payment Gateway Integration Guide

This document outlines the requirements, options, and step-by-step process for integrating the **Little Hotelier** room booking engine and a **Payment Gateway** into the Miles to Go website.

---

## 1. Integration Approaches for Little Hotelier

There are two primary ways to integrate Little Hotelier with a custom React website. We need to decide which approach fits best based on your requirements.

### Option A: The Widget / Iframe Approach (Recommended)
This is the standard and most secure method. It involves embedding the Little Hotelier booking engine directly onto the website.

*   **How it works:** We add a "Book Now" widget or link that opens the Little Hotelier booking interface (either directly on the page via iframe, or redirecting the user to a branded Little Hotelier booking page).
*   **Pros:** Very quick to set up, secure, handles all PCI compliance automatically, and seamlessly updates whenever you change rates/availability in Little Hotelier. Little Hotelier handles the payment collection natively.
*   **Cons:** Less customizable design (though Little Hotelier allows some custom branding).

### Option B: Custom API Integration
This approach involves using Little Hotelier's APIs to build a 100% custom booking flow natively in the React website.

*   **How it works:** We build custom UI for selecting dates, fetching availability via API, gathering guest details, and passing the reservation to Little Hotelier.
*   **Pros:** Complete control over the user experience and design.
*   **Cons:** Requires extensive backend infrastructure, complex logic for handling rates/availability, and separate handling for payment processing and PCI compliance.

---

## 2. Prerequisites & What We Need From You

Depending on the approach chosen, here is the information needed to proceed:

### For Option A (Widget/Iframe Integration)
1.  **Little Hotelier Booking Engine URL:** The direct link to your property's booking engine (e.g., `https://book.littlehotelier.com/properties/miles-to-go-direct`).
2.  **Widget Script (Optional):** If Little Hotelier provides a specific JavaScript snippet for a booking widget (like a date-picker that redirects to their engine), please provide this snippet.

### For Option B (Custom API Integration)
1.  **API Credentials:** `Client ID`, `Client Secret`, and `API Endpoint URLs` provided by Little Hotelier / SiteMinder support.
2.  **Property ID:** The unique identifier for "Miles to Go" in the Little Hotelier system.
3.  **Backend Environment:** A Node.js backend (or similar) will be required to securely communicate with the Little Hotelier API, as API keys cannot be exposed in the frontend React code.

---

## 3. Payment Gateway Integration

How we handle payments depends entirely on the Little Hotelier integration method.

### If using Little Hotelier Widget (Option A)
*   **No extra code needed on the website!** 
*   Little Hotelier handles the payment gateway within their booking engine. You simply configure your payment processor (like Stripe, SiteMinder Pay, PayPal, etc.) inside the Little Hotelier dashboard.

### If using Custom API Integration (Option B) or Standalone Payments
If we are processing payments directly on our custom checkout page before sending the booking to Little Hotelier, we will need to integrate a payment gateway.

**If using SumUp (Based on typical setups):**
1.  **SumUp OAuth App:** You will need to create an OAuth Application in the SumUp Developer Dashboard.
2.  **Required Scopes:** Enable `payments`, `transactions.history`, `user.app-settings`, and `user.profile_readonly`.
3.  **Credentials needed:** `Client ID` and `Client Secret`.
4.  **Flow:** The React app will capture card details (via SumUp's secure widget) -> Send token to our backend -> Backend charges the SumUp API -> Backend creates reservation in Little Hotelier API.

**If using Stripe:**
1.  **Credentials needed:** `Publishable Key` (for frontend) and `Secret Key` (for backend).
2.  **Flow:** Use Stripe Elements in React for secure card capture.

---

## 4. Next Steps

To begin the integration, please confirm:

1.  **Which approach do you prefer?** (Widget/Iframe or Custom API).
2.  **Can you provide the Little Hotelier Widget snippet or Booking URL?**
3.  **Are we using Little Hotelier's built-in payment processor, or do we need a custom integration (like SumUp)?**

Once we have this information, we will create the necessary components (e.g., embedding the widget on the `/booking` page and updating the global "Book Now" buttons).
