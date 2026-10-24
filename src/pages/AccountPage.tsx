import { useState } from "react";
import type { FormEvent } from "react";
import type { PageProps } from "./types";
import Breadcrumb from "./Breadcrumb";
import { passwordDigest } from "../utils/auth";

export default function AccountPage(props: PageProps) {
  const saved =
    localStorage.getItem("exclusive-session") === "1"
      ? JSON.parse(localStorage.getItem("exclusive-account") || "null")
      : null;
  const [section, setSection] = useState("My Profile");
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!saved) {
      props.showNotice("Log in to save your profile.");
      props.navigate("/login");
      return;
    }
    const fields = new FormData(event.currentTarget);
    const current = String(fields.get("currentPassword") ?? "");
    const next = String(fields.get("newPassword") ?? "");
    const confirm = String(fields.get("confirmPassword") ?? "");
    if (next) {
      if (
        !saved ||
        !current ||
        saved.passwordHash !== (await passwordDigest(current, saved.salt))
      ) {
        props.showNotice("Current password is incorrect.");
        return;
      }
      if (next.length < 6 || next !== confirm) {
        props.showNotice(
          "New passwords must match and have at least 6 characters.",
        );
        return;
      }
      saved.passwordHash = await passwordDigest(next, saved.salt);
    }
    const profile = {
      firstName: String(fields.get("firstName") ?? ""),
      lastName: String(fields.get("lastName") ?? ""),
      email: String(fields.get("email") ?? ""),
      address: String(fields.get("address") ?? ""),
    };
    localStorage.setItem("exclusive-profile", JSON.stringify(profile));
    if (saved)
      localStorage.setItem(
        "exclusive-account",
        JSON.stringify({
          ...saved,
          name: `${profile.firstName} ${profile.lastName}`.trim(),
          identifier: profile.email || saved.identifier,
        }),
      );
    event.currentTarget
      .querySelectorAll<HTMLInputElement>('input[type="password"]')
      .forEach((input) => {
        input.value = "";
      });
    props.showNotice("Profile saved");
  }
  return (
    <main className="route-main account-page">
      <Breadcrumb items={["My Account"]} navigate={props.navigate} />
      <div className="account-welcome">
        Welcome! <span>{saved?.name || "Guest"}</span>
      </div>
      <div className="account-layout">
        <aside>
          <h3>Manage My Account</h3>
          {["My Profile", "Address Book", "My Payment Options"].map((x) => (
            <button
              key={x}
              className={section === x ? "active" : ""}
              onClick={() => setSection(x)}
            >
              {x}
            </button>
          ))}
          <h3>My Orders</h3>
          {["My Returns", "My Cancellations"].map((x) => (
            <button key={x} onClick={() => setSection(x)}>
              {x}
            </button>
          ))}
          <h3>My WishList</h3>
          <button onClick={() => props.navigate("/wishlist")}>
            View Wishlist
          </button>
        </aside>
        <div className="profile-card">
          <h2>{section === "My Profile" ? "Edit Your Profile" : section}</h2>
          {section === "My Profile" ? (
            <form onSubmit={save}>
              <div className="profile-grid">
                <label>
                  First Name
                  <input
                    name="firstName"
                    defaultValue={saved?.name?.split(" ")[0] || ""}
                  />
                </label>
                <label>
                  Last Name
                  <input
                    name="lastName"
                    defaultValue={
                      saved?.name?.split(" ").slice(1).join(" ") || ""
                    }
                  />
                </label>
                <label>
                  Email
                  <input name="email" defaultValue={saved?.identifier || ""} />
                </label>
                <label>
                  Address
                  <input name="address" placeholder="Street address" />
                </label>
              </div>
              <h3>Password Changes</h3>
              <input
                name="currentPassword"
                type="password"
                placeholder="Current Password"
              />
              <input
                name="newPassword"
                type="password"
                placeholder="New Password"
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm New Password"
              />
              <div className="profile-actions">
                <button type="button" onClick={() => props.navigate("/")}>
                  Cancel
                </button>
                <button className="red-button">Save Changes</button>
              </div>
            </form>
          ) : (
            <p>Your {section.toLowerCase()} will appear here.</p>
          )}
        </div>
      </div>
    </main>
  );
}
