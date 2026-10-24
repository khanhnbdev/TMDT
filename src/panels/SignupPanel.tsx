import type { PanelProps } from "./types";

export default function SignupPanel(
  props: PanelProps & {
    signupComplete: boolean;
    setSignupComplete: (value: boolean) => void;
  },
) {
  const { signupComplete, setSignupComplete } = props;
  return (
    <div className="info-content">
      {signupComplete ? (
        <p>Thanks for joining the demo. No account was created.</p>
      ) : (
        <form
          className="signup-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSignupComplete(true);
          }}
        >
          <p>Join this demo storefront for updates.</p>
          <label>
            Name
            <input required minLength={2} placeholder="Your name" />
          </label>
          <label>
            Email
            <input required type="email" placeholder="you@example.com" />
          </label>
          <button className="panel-primary" type="submit">
            Join the demo
          </button>
          <small>No account or password is stored.</small>
        </form>
      )}
    </div>
  );
}
