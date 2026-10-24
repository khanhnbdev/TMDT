import { useState } from "react";
import type { FormEvent } from "react";
import type { PageProps } from "./types";
import { passwordDigest } from "../utils/auth";

export default function AuthPage({
  route,
  navigate,
  showNotice,
}: Pick<PageProps, "route" | "navigate" | "showNotice">) {
  const signup = route === "/signup";
  const [error, setError] = useState("");
  const [forgot, setForgot] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const identifier = String(fields.get("identifier") ?? "").trim();
    const password = String(fields.get("password") ?? "");
    if (forgot) {
      setError("");
      showNotice("Password reset is unavailable without an email service.");
      return;
    }
    if (signup) {
      const name = String(fields.get("name") ?? "").trim();
      if (password.length < 6) {
        setError("Use at least 6 characters for your password.");
        return;
      }
      const salt = crypto.randomUUID();
      localStorage.setItem(
        "exclusive-account",
        JSON.stringify({
          name,
          identifier,
          salt,
          passwordHash: await passwordDigest(password, salt),
        }),
      );
      localStorage.setItem("exclusive-session", "1");
      showNotice("Account created successfully");
      navigate("/account");
      return;
    }
    const saved = JSON.parse(
      localStorage.getItem("exclusive-account") || "null",
    );
    if (
      !saved ||
      saved.identifier !== identifier ||
      saved.passwordHash !== (await passwordDigest(password, saved.salt))
    ) {
      setError("Email or password does not match.");
      return;
    }
    localStorage.setItem("exclusive-session", "1");
    showNotice(`Welcome back, ${saved.name}`);
    navigate("/account");
  }
  return (
    <main className="auth-stage">
      <div className="auth-art">
        <img
          src="/assets/auth-shopping.png"
          alt="Shopping bags, basket and smartphone"
        />
      </div>
      <div className="auth-copy">
        <h1>
          {forgot
            ? "Reset your password"
            : signup
              ? "Create an account"
              : "Log in to Exclusive"}
        </h1>
        <p>
          {forgot
            ? "Enter your email to request a password reset"
            : "Enter your details below"}
        </p>
        <form onSubmit={submit} className="auth-form">
          {signup && (
            <input name="name" required placeholder="Name" aria-label="Name" />
          )}
          <input
            name="identifier"
            required
            placeholder="Email or Phone Number"
            aria-label="Email or Phone Number"
          />
          {!forgot && (
            <input
              name="password"
              required
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          )}
          {error && (
            <div className="form-error" role="alert">
              {error}
            </div>
          )}
          {signup ? (
            <>
              <button className="red-button auth-submit" type="submit">
                Create Account
              </button>
              <button
                className="google-button"
                type="button"
                onClick={() =>
                  showNotice(
                    "Google sign-in needs an OAuth provider to be configured.",
                  )
                }
              >
                <span className="google-g">G</span> Sign up with Google
              </button>
              <div className="auth-switch">
                Already have account?{" "}
                <button type="button" onClick={() => navigate("/login")}>
                  Log in
                </button>
              </div>
            </>
          ) : (
            <div className="login-actions">
              <button className="red-button" type="submit">
                {forgot ? "Request Reset" : "Log In"}
              </button>
              <button
                type="button"
                className="text-red"
                onClick={() => {
                  setForgot(!forgot);
                  setError("");
                }}
              >
                {forgot ? "Back to Log In" : "Forgot Password?"}
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
