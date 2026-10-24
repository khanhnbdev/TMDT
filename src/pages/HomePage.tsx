import type { Storefront } from "../hooks/useStorefront";
import { departments, heroPromos } from "../data/home";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import MusicBanner from "../components/MusicBanner";
import Products from "../components/Products";
import Featured from "../components/Featured";
import HomeServices from "../components/home/HomeServices";

export default function HomePage({
  categoryMenu,
  setCategoryMenu,
  showCatalog,
  setHeroHovered,
  setHeroFocused,
  heroIndex,
  flashIndex,
}: Pick<
  Storefront,
  | "categoryMenu"
  | "setCategoryMenu"
  | "showCatalog"
  | "setHeroHovered"
  | "setHeroFocused"
  | "heroIndex"
  | "flashIndex"
>) {
  return (
    <>
      <aside className="departments">
        {departments.map((label, i) => (
          <a
            href="#products"
            key={label}
            onClick={(event) => {
              event.preventDefault();
              if (i < 2) setCategoryMenu(categoryMenu === label ? "" : label);
              else showCatalog(label);
            }}
          >
            {label}
            {i < 2 && <span>›</span>}
          </a>
        ))}
      </aside>
      {categoryMenu && (
        <div className="category-dropdown">
          {(categoryMenu.startsWith("Woman")
            ? ["Dresses", "Tops", "Handbags", "Footwear"]
            : ["Clothing", "Shoes", "Watches", "Accessories"]
          ).map((label) => (
            <button
              key={label}
              onClick={() => {
                setCategoryMenu("");
                showCatalog(categoryMenu);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div className="hero-divider" />
      <section
        className="hero"
        aria-label="Featured promotions"
        onMouseEnter={() => setHeroHovered(true)}
        onMouseLeave={() => setHeroHovered(false)}
        onFocusCapture={() => setHeroFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setHeroFocused(false);
        }}
      >
        {heroIndex === 2 ? (
          <Hero />
        ) : (
          <div className="alternate-hero">
            <div>
              <p>{heroPromos[heroIndex]?.eyebrow}</p>
              <h2>{heroPromos[heroIndex]?.title}</h2>
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop Now →
              </button>
            </div>
            <img src={heroPromos[heroIndex]?.image} alt="" />
          </div>
        )}
        <div className="hero-dots">
          {heroPromos.map((_, index) => (
            <button
              key={index}
              data-hero-dot={index}
              className={
                heroIndex === 2 ? "" : index === heroIndex ? "selected" : ""
              }
              aria-label={"Show promotion " + (index + 1)}
            />
          ))}
        </div>
      </section>
      <section
        id="flash-sales"
        className="flash-sales"
        style={
          { "--flash-offset": -300 * flashIndex + "px" } as React.CSSProperties
        }
      >
        <FlashSales />
      </section>
      <div className="sales-button">
        <a href="#products">View All Products</a>
      </div>
      <div className="separator separator-one" />
      <section id="categories" className="categories">
        <Categories />
      </section>
      <div className="separator separator-two" />
      <section className="best-selling">
        <BestSelling />
      </section>
      <section className="music-banner">
        <MusicBanner />
      </section>
      <section id="products" className="products">
        <Products />
      </section>
      <section className="featured">
        <Featured />
      </section>
      <HomeServices />
      <a className="back-top" href="#" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
