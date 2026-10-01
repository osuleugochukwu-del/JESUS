# Trade Avata Backend Architecture

This project is prepared for the Firebase backend layer.

- Firebase Authentication: user registration/login and account identity.
- Cloud Firestore: users, homepage content, indicators, courses, orders, support, admin settings and analytics records.
- Firebase Storage: replaceable homepage banners, indicator previews, course images and downloadable files.
- Firebase Cloud Functions: secure server-side operations, email, payment webhooks and broker integrations.
- Admin controls: public homepage content and advertisement slots are designed to be managed from Firebase-backed admin pages.

No production secrets belong in the frontend repository. Put Firebase client configuration in `.env` using `.env.example` as the template.
