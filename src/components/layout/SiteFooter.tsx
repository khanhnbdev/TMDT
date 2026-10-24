export default function SiteFooter({
  onSubscribe,
}: {
  onSubscribe: (email: string) => void;
}) {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const input = event.currentTarget.querySelector("input")!;
              onSubscribe(input.value);
              input.value = "";
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button aria-label="Subscribe">➤</button>
          </form>
        </div>
        <div>
          <h4>Support</h4>
          <p>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <a className="footer-link" href="mailto:exclusive@gmail.com">
            exclusive@gmail.com
          </a>
          <a className="footer-link" href="tel:+88015888889999">
            +88015-88888-9999
          </a>
        </div>
        <div>
          <h4>Account</h4>
          {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
            (label) => (
              <button className="footer-link" key={label}>
                {label}
              </button>
            ),
          )}
        </div>
        <div>
          <h4>Quick Link</h4>
          {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((label) => (
            <button className="footer-link" key={label}>
              {label}
            </button>
          ))}
        </div>
        <div>
          <h4>Download App</h4>
          <small>Save $3 with App New User Only</small>
          <div className="app-placeholder">
            <button>▦ &nbsp; Google Play</button>
            <button>▦ &nbsp; App Store</button>
          </div>
          <div className="social-links">
            {["◉", "𝕏", "◎", "in"].map((label) => (
              <button
                key={label}
                data-social={label}
                aria-label={"Open social channel " + label}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
