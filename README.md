# Rhea Mothers Alliance Foundation

Official website for the Rhea Mothers Alliance Foundation.

## Structure

```
rhea-foundation/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← All styles
├── js/
│   └── nav.js          ← Shared nav logic
└── pages/
    └── donate.html     ← Donations page
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `rhea-foundation`)
2. Upload all files, preserving the folder structure
3. Go to **Settings → Pages**
4. Under "Source", select **main branch** and **/ (root)**
5. Click Save — your site will be live at `https://yourusername.github.io/rhea-foundation/`

## Next Steps

- **Payment integration**: Replace the placeholder in `pages/donate.html` with [Stripe Checkout](https://stripe.com/docs/payments/checkout), [PayPal Donate](https://www.paypal.com/donate/buttons), or [Canada Helps](https://www.canadahelps.org) (for Canadian NGOs)
- **Newsletter**: Connect the signup form to [Mailchimp](https://mailchimp.com), [ConvertKit](https://convertkit.com), or any email platform via their embed code
- **Analytics**: Add Google Analytics or Plausible tracking
- **Domain**: Point a custom domain to GitHub Pages in Settings → Pages → Custom Domain

## Customization

- Update stats and content in `index.html`
- Add more projects by duplicating the `.project-card` blocks in `index.html`
- Colors are defined as CSS variables at the top of `css/style.css`
