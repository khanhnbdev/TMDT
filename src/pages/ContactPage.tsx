import type { FormEvent } from "react";
import type { PageProps } from "./types";
import Breadcrumb from "./Breadcrumb";

export default function ContactPage(props: PageProps) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    props.showNotice(
      "Message saved locally. Connect an email service to send it.",
    );
  }
  return (
    <main className="route-main contact-page">
      <Breadcrumb items={["Contact"]} navigate={props.navigate} />
      <div className="contact-grid">
        <aside>
          <section>
            <div className="contact-heading">
              <span>☎</span>
              <h2>Call To Us</h2>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </section>
          <section>
            <div className="contact-heading">
              <span>✉</span>
              <h2>Write To US</h2>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </section>
        </aside>
        <form onSubmit={submit}>
          <div className="contact-inputs">
            <input required placeholder="Your Name *" />
            <input required type="email" placeholder="Your Email *" />
            <input required placeholder="Your Phone *" />
          </div>
          <textarea required placeholder="Your Massage" />
          <button className="red-button">Send Massage</button>
        </form>
      </div>
    </main>
  );
}
