import type { PageProps } from "./types";
import type { Product } from "../shop";
import Breadcrumb from "./Breadcrumb";
import { money } from "../utils/pricing";

export default function AboutPage(props: PageProps) {
  return (
    <main className="about-page">
      <div className="route-main">
        <Breadcrumb items={["About"]} navigate={props.navigate} />
        <div className="about-story">
          <div>
            <h1>Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>
          <div className="about-photo">
            <img
              src="/assets/about-shopping.png"
              alt="People enjoying shopping"
            />
          </div>
        </div>
        <div className="about-stats">
          {[
            ["▣", "10.5k", "Sellers active on our site"],
            ["＄", "33k", "Monthly Product Sale"],
            ["♧", "45.5k", "Customer active in our site"],
            ["◉", "25k", "Annual gross sale in our site"],
          ].map(([icon, num, label]) => (
            <div key={num}>
              <span>{icon}</span>
              <strong>{num}</strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className="about-team">
          {["Tom Cruise", "Emma Watson", "Will Smith"].map((name, i) => (
            <div key={name}>
              <div
                className={`team-image team-image-${i + 1}`}
                role="img"
                aria-label={`${name} portrait`}
              />
              <h2>{name}</h2>
              <p>
                {
                  [
                    "Founder & Chairman",
                    "Managing Director",
                    "Product Designer",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
        <div className="about-service-strip">
          <div>
            🚚 <strong>FREE AND FAST DELIVERY</strong>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div>
            ☎ <strong>24/7 CUSTOMER SERVICE</strong>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            ✓ <strong>MONEY BACK GUARANTEE</strong>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </main>
  );
}
